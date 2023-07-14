package v1_0_1

import (
	"context"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
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
	conf.CleanupDir = false

	// override fork height for testing
	pApp.Forks[0].UpgradeHeight = 2
	pApp.Forks[1].UpgradeHeight = 3
	
	suite.network, err = network.New(suite.T(), suite.T().TempDir(), conf)
	suite.Require().NoError(err)

	_, err = suite.network.WaitForHeightWithTimeout(pApp.Forks[1].UpgradeHeight+1, 60*time.Second)
	suite.Require().NoError(err)

}

func (suite *UpgradeTestSuite) TestMinCommission() {
	suite.T().Log("checking commission params")
	grpcClient, err := suite.network.GetGRPCClient()
	suite.Require().NoError(err)
	queryValidatorsResponse := new(stakingtypes.QueryValidatorsResponse)
	queryParamsResponse := new(stakingtypes.QueryParamsResponse)

	err = grpcClient.Invoke(context.Background(), "/cosmos.staking.v1beta1.Query/Params", nil, queryParamsResponse)
	suite.Require().NoError(err)

	err = grpcClient.Invoke(context.Background(), "/cosmos.staking.v1beta1.Query/Validators", nil, queryValidatorsResponse)
	suite.Require().NoError(err)

	for _, v := range queryValidatorsResponse.Validators {
		suite.Require().True(v.Commission.Rate.GTE(queryParamsResponse.Params.MinCommissionRate))
	}

}

func TestUpgradeTestSuite(t *testing.T) {
	suite.Run(t, new(UpgradeTestSuite))
}
