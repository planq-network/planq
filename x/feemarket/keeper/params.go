package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/planq-network/planq/x/feemarket/types"
)

// GetParams returns the total set of fee market parameters.
func (k Keeper) GetParams(ctx sdk.Context) (params types.Params) {
	k.paramSpace.GetParamSet(ctx, &params)
	return params
}

// SetParams sets the fee market parameters to the param space.
func (k Keeper) SetParams(ctx sdk.Context, params types.Params) {
	k.paramSpace.SetParamSet(ctx, &params)
}
