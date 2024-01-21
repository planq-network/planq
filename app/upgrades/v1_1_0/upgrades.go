package v1_1_0

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	erc20 "github.com/evmos/evmos/v9/x/erc20"
	erc20types "github.com/evmos/evmos/v9/x/erc20/types"
	"github.com/planq-network/planq/app/keepers"
	"github.com/planq-network/planq/app/upgrades"
)

// CreateUpgradeHandler creates an SDK upgrade handler for v1_1_0
func CreateUpgradeHandler(
	mm *module.Manager,
	configurator module.Configurator,
	bpm upgrades.BaseAppParamManager,
	keepers *keepers.AppKeepers,
) upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, _ upgradetypes.Plan, vm module.VersionMap) (module.VersionMap, error) {
		logger := ctx.Logger().With("upgrade", UpgradeName)
		gs := &erc20types.GenesisState{
			Params: erc20types.Params{
				EnableErc20:   true,
				EnableEVMHook: true,
			},
		}
		bz, err := erc20types.ModuleCdc.MarshalJSON(gs)
		if err != nil {
			return nil, errorsmod.Wrapf(err, "failed to marshal %s genesis state", erc20types.ModuleName)
		}

		vm[erc20types.ModuleName] = erc20.AppModule{}.ConsensusVersion()
		m := mm.Modules[erc20types.ModuleName].(module.AppModuleGenesis)
		m.InitGenesis(ctx, erc20types.ModuleCdc, bz)
		logger.Debug("running module migrations ...")
		return mm.RunMigrations(ctx, configurator, vm)
	}
}
