package v1_1_0

import (
	store "github.com/cosmos/cosmos-sdk/store/types"
	"github.com/planq-network/planq/app/upgrades"
)

const (
	// UpgradeName is the shared upgrade plan name for mainnet and testnet
	UpgradeName = "v1.1.0"
	// MainnetUpgradeHeight defines the Planq mainnet block height on which the upgrade will take place
	UpgradeHeight = 7_516_700 // (24 * 60 * 60) / 5 + 7101660
	// UpgradeInfo defines the binaries that will be used for the upgrade
	UpgradeInfo = `0` // current binary will do the upgrade via schedule upgrade
)

var Upgrade = upgrades.Upgrade{
	UpgradeName:          UpgradeName,
	CreateUpgradeHandler: CreateUpgradeHandler,
	StoreUpgrades: store.StoreUpgrades{
		Added:   []string{},
		Deleted: []string{},
	},
}
