package v2_1

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	"github.com/planq-network/planq/v2/app/keepers"
)

func CreateUpgradeHandler(
	mm *module.Manager,
	configurator module.Configurator,
	keepers *keepers.AppKeepers,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, _ upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {
		logger := ctx.Logger().With("upgrade", UpgradeName)
		// Leave modules are as-is to avoid running InitGenesis.
		logger.Info("Starting module migrations...")
		vm, err := mm.RunMigrations(ctx, configurator, vm)

		if err != nil {
			return vm, err
		}
		logger.Info("Upgrade v2.1.0 complete")
		return vm, nil
	}

}
