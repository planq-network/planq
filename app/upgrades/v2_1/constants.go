package v2_1

import (
	store "github.com/cosmos/cosmos-sdk/store/types"
	packetforwardtypes "github.com/cosmos/ibc-apps/middleware/packet-forward-middleware/v7/packetforward/types"
	"github.com/planq-network/planq/v2/app/upgrades"
)

const (
	// UpgradeName is the shared upgrade plan name for mainnet
	UpgradeName = "v2.1.0"
	// UpgradeInfo defines the binaries that will be used for the upgrade
	UpgradeInfo = `''`
)

var Upgrade = upgrades.Upgrade{
	UpgradeName:          UpgradeName,
	CreateUpgradeHandler: CreateUpgradeHandler,
	StoreUpgrades: store.StoreUpgrades{
		Added:   []string{packetforwardtypes.ModuleName},
		Deleted: []string{},
	},
}
