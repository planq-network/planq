package v2

import (
	store "github.com/cosmos/cosmos-sdk/store/types"
	consensustypes "github.com/cosmos/cosmos-sdk/x/consensus/types"
	crisistypes "github.com/cosmos/cosmos-sdk/x/crisis/types"
	icahosttypes "github.com/cosmos/ibc-go/v7/modules/apps/27-interchain-accounts/host/types"
	"github.com/planq-network/planq/app/upgrades"
)

const (
	// UpgradeName is the shared upgrade plan name for mainnet
	UpgradeName = "v2.0.0"
	// UpgradeInfo defines the binaries that will be used for the upgrade
	UpgradeInfo = `''`

	// TODO: Define open channels for migration
	OpenChannels = 0
)

var Upgrade = upgrades.Upgrade{
	UpgradeName:          UpgradeName,
	CreateUpgradeHandler: CreateUpgradeHandler,
	StoreUpgrades: store.StoreUpgrades{
		Added:   []string{icahosttypes.SubModuleName, crisistypes.ModuleName, consensustypes.ModuleName},
		Deleted: []string{},
	},
}
