module github.com/planq-network/planq

go 1.18

require (
	cosmossdk.io/errors v1.0.0-beta.7
	cosmossdk.io/math v1.0.0-beta.3
	github.com/cosmos/cosmos-sdk v0.46.3
	github.com/cosmos/go-bip39 v1.0.0
	github.com/cosmos/ibc-go/v5 v5.0.0
	github.com/ethereum/go-ethereum v1.10.19
	github.com/evmos/ethermint v0.6.1-0.20220919141022-34226aa7b1fa
	github.com/evmos/evmos/v9 v9.0.0-20221024144001-b82bc3cc870f
	github.com/gorilla/mux v1.8.0
	github.com/pkg/errors v0.9.1
	github.com/rakyll/statik v0.1.7
	github.com/spf13/cast v1.5.0
	github.com/spf13/cobra v1.6.0
	github.com/stretchr/testify v1.8.0
	github.com/tendermint/tendermint v0.34.22
	github.com/tendermint/tm-db v0.6.7
	google.golang.org/grpc v1.50.1
)

replace (
	github.com/99designs/keyring => github.com/cosmos/keyring v1.1.7-0.20210622111912-ef00f8ac3d76

	// Fix upstream GHSA-h395-qcrw-5vmq vulnerability.
	// TODO Remove it: https://github.com/cosmos/cosmos-sdk/issues/10409
	github.com/gin-gonic/gin => github.com/gin-gonic/gin v1.7.0
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
)
