package v1_0_1

import (
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	evmkeeper "github.com/evmos/ethermint/x/evm/keeper"
	feemarketkeeper "github.com/evmos/ethermint/x/feemarket/keeper"
	erc20keeper "github.com/evmos/evmos/v12/x/erc20/keeper"
	"github.com/planq-network/planq/app/keepers"
)

// RunForkLogic executes height-gated on-chain fork logic for the Planq v2
// upgrade.
func RunForkLogic(ctx sdk.Context, keepers *keepers.AppKeepers, baseApp *baseapp.BaseApp) {
	ctx.Logger().Info("Applying Planq v1_0_1 upgrade." +
		" enable extra EIPs" +
		" enable ERC20 Module" +
		" setting max block gas limit + min gas price")

	EnableExtraEIPs(ctx, keepers.EvmKeeper)
	EnableErc20Module(ctx, keepers.Erc20Keeper)
	UpdateMaxBlockGasLimit(ctx, baseApp)
	UpdateMinGasPrice(ctx, keepers.FeeMarketKeeper)
}

func EnableErc20Module(ctx sdk.Context, erc20 erc20keeper.Keeper) {
	params := erc20.GetParams(ctx)
	params.EnableErc20 = true
	params.EnableEVMHook = true
	erc20.SetParams(ctx, params)
}

func UpdateMinGasPrice(ctx sdk.Context, feeMarket feemarketkeeper.Keeper) {
	params := feeMarket.GetParams(ctx)
	params.MinGasPrice = sdk.NewDec(20000000000)
	feeMarket.SetParams(ctx, params)
}

func UpdateMaxBlockGasLimit(ctx sdk.Context, baseApp *baseapp.BaseApp) {
	consensusParams := baseApp.GetConsensusParams(ctx)
	consensusParams.Block.MaxGas = 40000000
	baseApp.StoreConsensusParams(ctx, consensusParams)
}

func EnableExtraEIPs(ctx sdk.Context, evm *evmkeeper.Keeper) {
	params := evm.GetParams(ctx)
	params.ExtraEIPs = []int64{2929, 2200, 1884, 1344}
	evm.SetParams(ctx, params)
}
