package v2

import (
	"context"
	evmtypes "github.com/evmos/ethermint/x/evm/types"
	feemarkettypes "github.com/evmos/ethermint/x/feemarket/types"
	erc20types "github.com/evmos/evmos/v9/x/erc20/types"
	pApp "github.com/planq-network/planq/app"
	"github.com/planq-network/planq/testutil/network"
	"github.com/stretchr/testify/suite"
	"testing"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

type UpgradeTestSuite struct {
	suite.Suite

	ctx         sdk.Context
	app         *pApp.PlanqApp
	consAddress sdk.ConsAddress
	network     *network.Network
}

func (suite *UpgradeTestSuite) SetupSuite() {

	suite.T().Log("setting up integration test suite")

	var err error
	conf := network.DefaultConfig()
	conf.CleanupDir = true

	// override fork height for testing
	pApp.Forks[0].UpgradeHeight = 2
	suite.network, err = network.New(suite.T(), suite.T().TempDir(), conf)
	suite.Require().NoError(err)

	_, err = suite.network.WaitForHeightWithTimeout(pApp.Forks[0].UpgradeHeight+1, 30*time.Second)
	suite.Require().NoError(err)

}

func (suite *UpgradeTestSuite) TestERC20Params() {
	suite.T().Log("checking erc20 params")
	grpcClient, err := suite.network.GetGRPCClient()
	suite.Require().NoError(err)
	queryParamsResponse := new(erc20types.QueryParamsResponse)

	err = grpcClient.Invoke(context.Background(), "/evmos.erc20.v1.Query/Params", nil, queryParamsResponse)
	suite.Require().NoError(err)

	suite.Require().Equal(true, queryParamsResponse.Params.EnableErc20)
	suite.Require().Equal(true, queryParamsResponse.Params.EnableEVMHook)
}

func (suite *UpgradeTestSuite) TestEVMParams() {
	suite.T().Log("checking evm and feemarket params")
	grpcClient, err := suite.network.GetGRPCClient()
	suite.Require().NoError(err)
	queryParamsResponse := new(evmtypes.QueryParamsResponse)

	err = grpcClient.Invoke(context.Background(), "/ethermint.evm.v1.Query/Params", nil, queryParamsResponse)
	suite.Require().NoError(err)

	suite.Require().Equal([]int64{2929, 2200, 1884, 1344}, queryParamsResponse.Params.ExtraEIPs)
	queryfeeParamsResponse := new(feemarkettypes.QueryParamsResponse)
	err = grpcClient.Invoke(context.Background(), "/ethermint.feemarket.v1.Query/Params", nil, queryfeeParamsResponse)
	suite.Require().NoError(err)

	suite.Require().Equal(sdk.NewDec(20000000000), queryfeeParamsResponse.Params.MinGasPrice)
}

func (suite *UpgradeTestSuite) TestBlockGas() {
	suite.T().Log("checking max block gas")
	consensParams, err := suite.network.GetConsensusParams()
	suite.Require().NoError(err)

	suite.Require().Equal(int64(40000000), consensParams.ConsensusParams.Block.MaxGas)
}

func TestUpgradeTestSuite(t *testing.T) {
	suite.Run(t, new(UpgradeTestSuite))
}
