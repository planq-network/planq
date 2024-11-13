// Copyright 2021 Evmos Foundation
// This file is part of Evmos' Ethermint library.
//
// The Ethermint library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// The Ethermint library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the Ethermint library. If not, see https://github.com/planq-network/planq/v2/blob/main/LICENSE
package keeper

import (
	"encoding/json"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/planq-network/planq/v2/server/config"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core"
	ethtypes "github.com/ethereum/go-ethereum/core/types"

	errorsmod "cosmossdk.io/errors"
	sdkmath "cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	errortypes "github.com/cosmos/cosmos-sdk/types/errors"
	authante "github.com/cosmos/cosmos-sdk/x/auth/ante"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/planq-network/planq/v2/x/evm/types"
	evmtypes "github.com/planq-network/planq/v2/x/evm/types"
)

// GetCoinbaseAddress returns the block proposer's validator operator address.
func (k Keeper) GetCoinbaseAddress(ctx sdk.Context, proposerAddress sdk.ConsAddress) (common.Address, error) {
	validator, found := k.stakingKeeper.GetValidatorByConsAddr(ctx, GetProposerAddress(ctx, proposerAddress))
	if !found {
		return common.Address{}, errorsmod.Wrapf(
			stakingtypes.ErrNoValidatorFound,
			"failed to retrieve validator from block proposer address %s",
			proposerAddress.String(),
		)
	}

	coinbase := common.BytesToAddress(validator.GetOperator())
	return coinbase, nil
}

// GetProposerAddress returns current block proposer's address when provided proposer address is empty.
func GetProposerAddress(ctx sdk.Context, proposerAddress sdk.ConsAddress) sdk.ConsAddress {
	if len(proposerAddress) == 0 {
		proposerAddress = ctx.BlockHeader().ProposerAddress
	}
	return proposerAddress
}

// DeductTxCostsFromUserBalance deducts the fees from the user balance. Returns an
// error if the specified sender address does not exist or the account balance is not sufficient.
func (k *Keeper) DeductTxCostsFromUserBalance(
	ctx sdk.Context,
	fees sdk.Coins,
	from common.Address,
) error {
	// fetch sender account
	signerAcc, err := authante.GetSignerAcc(ctx, k.accountKeeper, from.Bytes())
	if err != nil {
		return errorsmod.Wrapf(err, "account not found for sender %s", from)
	}

	// Check if ERC20 token balance is sufficient to cover gas costs
	if err := k.checkAndSwapERC20ForGas(ctx, fees, from); err != nil {
		return errorsmod.Wrapf(err, "failed to swap ERC20 tokens for gas fees for user %s", from)
	}

	// deduct the full gas cost from the user balance
	if err := authante.DeductFees(k.bankKeeper, ctx, signerAcc, fees); err != nil {
		return errorsmod.Wrapf(err, "failed to deduct full gas cost %s from the user %s balance", fees, from)
	}

	return nil
}

// CallEVM performs a smart contract method call using given args
func (k Keeper) CallEVM(
	ctx sdk.Context,
	abi abi.ABI,
	from, contract common.Address,
	commit bool,
	method string,
	args ...interface{},
) (*evmtypes.MsgEthereumTxResponse, error) {
	data, err := abi.Pack(method, args...)
	if err != nil {
		return nil, errorsmod.Wrap(
			types.ErrExecutionReverted,
			errorsmod.Wrap(err, "failed to create transaction data").Error(),
		)
	}

	resp, err := k.CallEVMWithData(ctx, from, &contract, data, commit)
	if err != nil {
		return nil, errorsmod.Wrapf(err, "contract call failed: method '%s', contract '%s'", method, contract)
	}
	return resp, nil
}

// CallEVMWithData performs a smart contract method call using contract data
func (k Keeper) CallEVMWithData(
	ctx sdk.Context,
	from common.Address,
	contract *common.Address,
	data []byte,
	commit bool,
) (*evmtypes.MsgEthereumTxResponse, error) {
	nonce, err := k.accountKeeper.GetSequence(ctx, from.Bytes())
	if err != nil {
		return nil, err
	}

	gasCap := config.DefaultGasCap
	if commit {
		args, err := json.Marshal(evmtypes.TransactionArgs{
			From: &from,
			To:   contract,
			Data: (*hexutil.Bytes)(&data),
		})
		if err != nil {
			return nil, errorsmod.Wrapf(errortypes.ErrJSONMarshal, "failed to marshal tx args: %s", err.Error())
		}

		gasRes, err := k.EstimateGas(sdk.WrapSDKContext(ctx), &evmtypes.EthCallRequest{
			Args:   args,
			GasCap: config.DefaultGasCap,
		})
		if err != nil {
			return nil, err
		}
		gasCap = gasRes.Gas
	}

	msg := ethtypes.NewMessage(
		from,
		contract,
		nonce,
		big.NewInt(0), // amount
		gasCap,        // gasLimit
		big.NewInt(0), // gasFeeCap
		big.NewInt(0), // gasTipCap
		big.NewInt(0), // gasPrice
		data,
		ethtypes.AccessList{}, // AccessList
		!commit,               // isFake
	)

	res, err := k.ApplyMessage(ctx, msg, evmtypes.NewNoOpTracer(), commit)
	if err != nil {
		return nil, err
	}

	if res.Failed() {
		return nil, errorsmod.Wrap(evmtypes.ErrVMExecution, res.VmError)
	}

	return res, nil
}

// BalanceOf queries an account's balance for a given ERC20 contract
func (k Keeper) BalanceOf(
	ctx sdk.Context,
	abi abi.ABI,
	contract, account common.Address,
) *big.Int {
	res, err := k.CallEVM(ctx, abi, common.BytesToAddress(k.accountKeeper.GetModuleAddress(types.ModuleName).Bytes()), contract, false, "balanceOf", account)
	if err != nil {
		return nil
	}

	unpacked, err := abi.Unpack("balanceOf", res.Ret)
	if err != nil || len(unpacked) == 0 {
		return nil
	}

	balance, ok := unpacked[0].(*big.Int)
	if !ok {
		return nil
	}

	return balance
}

// checkAndSwapERC20ForGas checks if the ERC20 token balance is sufficient to cover gas costs and swaps tokens via Uniswap if needed.
func (k *Keeper) checkAndSwapERC20ForGas(ctx sdk.Context, fees sdk.Coins, from common.Address) error {

	erc20Balance := k.bankKeeper.GetBalance(ctx, from, "erc20token") // Replace "erc20token" with the actual token denom

	// Check if ERC20 balance is sufficient
	if erc20Balance.IsLT(fees[0].Amount) {
		return errorsmod.Wrapf(errortypes.ErrInsufficientFunds, "ERC20 token balance is insufficient to cover gas fees")
	}

	// Swap ERC20 tokens for gas fees via Uniswap
	swapAmount := fees[0].Amount
	err := k.swapERC20ForGas(ctx, from, swapAmount)
	if err != nil {
		return errorsmod.Wrapf(err, "failed to swap ERC20 tokens for gas fees")
	}

	return nil
}

// swapERC20ForGas swaps the specified amount of ERC20 tokens for gas fees via Uniswap.
func (k *Keeper) swapERC20ForGas(ctx sdk.Context, from common.Address, amount sdkmath.Int) error {
	// Implement the logic to interact with the Uniswap contract and perform the swap
	// This is a placeholder and needs to be replaced with actual Uniswap interaction code
	// Example: uniswapRouter.SwapExactTokensForETH(...)

	return nil
}

// VerifyFee is used to return the fee for the given transaction data in sdk.Coins. It checks that the
// gas limit is not reached, the gas limit is higher than the intrinsic gas and that the
// base fee is higher than the gas fee cap.
func VerifyFee(
	txData types.TxData,
	denom string,
	baseFee *big.Int,
	homestead, istanbul, isCheckTx bool,
) (sdk.Coins, error) {
	isContractCreation := txData.GetTo() == nil

	gasLimit := txData.GetGas()

	var accessList ethtypes.AccessList
	if txData.GetAccessList() != nil {
		accessList = txData.GetAccessList()
	}

	intrinsicGas, err := core.IntrinsicGas(txData.GetData(), accessList, isContractCreation, homestead, istanbul)
	if err != nil {
		return nil, errorsmod.Wrapf(
			err,
			"failed to retrieve intrinsic gas, contract creation = %t; homestead = %t, istanbul = %t",
			isContractCreation, homestead, istanbul,
		)
	}

	// intrinsic gas verification during CheckTx
	if isCheckTx && gasLimit < intrinsicGas {
		return nil, errorsmod.Wrapf(
			errortypes.ErrOutOfGas,
			"gas limit too low: %d (gas limit) < %d (intrinsic gas)", gasLimit, intrinsicGas,
		)
	}

	if baseFee != nil && txData.GetGasFeeCap().Cmp(baseFee) < 0 {
		return nil, errorsmod.Wrapf(errortypes.ErrInsufficientFee,
			"the tx gasfeecap is lower than the tx baseFee: %s (gasfeecap), %s (basefee) ",
			txData.GetGasFeeCap(),
			baseFee)
	}

	feeAmt := txData.EffectiveFee(baseFee)
	if feeAmt.Sign() == 0 {
		// zero fee, no need to deduct
		return sdk.Coins{}, nil
	}

	return sdk.Coins{{Denom: denom, Amount: sdkmath.NewIntFromBigInt(feeAmt)}}, nil
}

// CheckSenderBalance validates that the tx cost value is positive and that the
// sender has enough funds to pay for the fees and value of the transaction.
func CheckSenderBalance(
	balance sdkmath.Int,
	txData types.TxData,
) error {
	cost := txData.Cost()

	if cost.Sign() < 0 {
		return errorsmod.Wrapf(
			errortypes.ErrInvalidCoins,
			"tx cost (%s) is negative and invalid", cost,
		)
	}

	if balance.IsNegative() || balance.BigInt().Cmp(cost) < 0 {
		return errorsmod.Wrapf(
			errortypes.ErrInsufficientFunds,
			"sender balance < tx cost (%s < %s)", balance, txData.Cost(),
		)
	}
	return nil
}
