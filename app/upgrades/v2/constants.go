package v2

import "github.com/planq-network/planq/app/upgrades"

const (
	// UpgradeName defines the on-chain upgrade name for the Osmosis v3 upgrade.
	UpgradeName = "v2"

	// UpgradeHeight defines the block height at which the Osmosis v3 upgrade is
	// triggered.
	UpgradeHeight = 45_000
)

var Fork = upgrades.Fork{
	UpgradeName:    UpgradeName,
	UpgradeHeight:  UpgradeHeight,
	BeginForkLogic: RunForkLogic,
}
