package v1_0_5

import (
	"fmt"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	stakingkeeper "github.com/cosmos/cosmos-sdk/x/staking/keeper"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	"github.com/planq-network/planq/app/keepers"
)

func RunForkLogic(ctx sdk.Context, keepers *keepers.AppKeepers, baseApp *baseapp.BaseApp) {
	ctx.Logger().Info("Applying Planq v1_0_5 upgrade." +
		" set min commission rate to 4%")
	setMinCommissionRate(ctx, keepers.StakingKeeper)

}

// setMinCommissionRate sets the minimum commission rate for validators
// to 4%.
func setMinCommissionRate(ctx sdk.Context, sk stakingkeeper.Keeper) {
	// Update the commission rate of all validators whose commission rate is smaller than min-commission-rate
	validators := sk.GetAllValidators(ctx)
	minCommissionRate := sk.GetParams(ctx).MinCommissionRate
	for _, v := range validators {
		if v.Commission.Rate.LT(minCommissionRate) {

			comm, err := updateValidatorCommission(ctx, v, minCommissionRate, sk)
			if err != nil {
				panic(err)
			}
			v.Commission = comm

			// call the before-modification hook since we're about to update the commission
			sk.BeforeValidatorModified(ctx, v.GetOperator())
			sk.SetValidator(ctx, v)
		}
	}

}

func updateValidatorCommission(ctx sdk.Context, validator stakingtypes.Validator, newRate sdk.Dec, sk stakingkeeper.Keeper) (stakingtypes.Commission, error) {
	commission := validator.Commission
	blockTime := ctx.BlockHeader().Time

	// validate newRate
	switch {
	case newRate.IsNegative():
		return commission, stakingtypes.ErrCommissionChangeRateNegative
	case newRate.GT(sdk.OneDec()):
		return commission, fmt.Errorf("cannot set validator commission to larger than 100%")
	case newRate.LT(sk.MinCommissionRate(ctx)):
		return commission, fmt.Errorf("cannot set validator commission to less than minimum rate of %s", sk.MinCommissionRate(ctx))
	}

	commission.Rate = newRate
	if commission.MaxRate.LT(newRate) { // if new-rate > max-rate, then max-rate *= 2
		commission.MaxRate = sdk.MinDec(newRate.MulInt64(2), sdk.OneDec())
	}
	commission.UpdateTime = blockTime

	return commission, nil
}
