package app

import (
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// BeginBlockForks is intended to be ran in a chain upgrade.
func BeginBlockForks(ctx sdk.Context, app *PlanqApp, baseApp baseapp.BaseApp) {
	for _, fork := range Forks {
		switch ctx.ChainID() {
		case "planq_7070-2":
			if ctx.BlockHeight() == fork.UpgradeHeight {
				fork.BeginForkLogic(ctx, &app.AppKeepers, &baseApp)
				return
			}
			break
		default:
			if ctx.BlockHeight() == fork.UpgradeHeightTestnet {
				fork.BeginForkLogic(ctx, &app.AppKeepers, &baseApp)
				return
			}
		}

	}
}
