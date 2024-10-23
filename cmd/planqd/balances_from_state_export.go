package main

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"

	tmjson "github.com/cometbft/cometbft/libs/json"
	tmtypes "github.com/cometbft/cometbft/types"
	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/server"
	sdk "github.com/cosmos/cosmos-sdk/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	baseconfig "github.com/planq-network/planq/v2/cmd/config"
)

const (
	FlagSelectPoolIds      = "breakdown-by-pool-ids"
	FlagMinimumStakeAmount = "minimum-stake-amount"
)

type DeriveSnapshot struct {
	NumberAccounts uint64                    `json:"num_accounts"`
	Accounts       map[string]DerivedAccount `json:"accounts"`
}

// DerivedAccount provide fields of snapshot per account
// It is the simplified struct we are presenting in this 'balances from state export' snapshot for people.
type DerivedAccount struct {
	// TODO: Consider removing this, since duplicated
	Address             string               `json:"address"`
	LiquidBalances      sdk.Coins            `json:"liquid_balance"`
	Staked              sdk.Int              `json:"staked"`
	UnbondingStake      sdk.Int              `json:"unbonding_stake"`
	Bonded              sdk.Coins            `json:"bonded"`
	BondedBySelectPools map[uint64]sdk.Coins `json:"bonded_by_select_pools"`
	TotalBalances       sdk.Coins            `json:"total_balances"`
}

// newDerivedAccount returns a new derived account.
func newDerivedAccount(address string) DerivedAccount {
	return DerivedAccount{
		Address:        address,
		LiquidBalances: sdk.Coins{},
		Staked:         sdk.ZeroInt(),
		UnbondingStake: sdk.ZeroInt(),
		Bonded:         sdk.Coins{},
	}
}

// getGenStateFromPath returns a JSON genState message from inputted path.
func getGenStateFromPath(genesisFilePath string) (map[string]json.RawMessage, error) {
	genState := make(map[string]json.RawMessage)

	genesisFile, err := os.Open(filepath.Clean(genesisFilePath))
	if err != nil {
		return genState, err
	}
	defer genesisFile.Close()

	byteValue, _ := io.ReadAll(genesisFile)

	var doc tmtypes.GenesisDoc
	err = tmjson.Unmarshal(byteValue, &doc)
	if err != nil {
		return genState, err
	}

	err = json.Unmarshal(doc.AppState, &genState)
	if err != nil {
		panic(err)
	}
	return genState, nil
}

// ExportAirdropSnapshotCmd generates a snapshot.json from a provided exported genesis.json.
func ExportDeriveBalancesCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "export-derive-balances [input-genesis-file] [output-snapshot-json]",
		Short: "Export a derive balances from a provided genesis export",
		Long: `Export a derive balances from a provided genesis export
Example:
	planqd export-derive-balances ../genesis.json ../snapshot.json
`,
		Args: cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			serverCtx := server.GetServerContextFromCmd(cmd)
			config := serverCtx.Config
			config.SetRoot(clientCtx.HomeDir)

			genesisFile := args[0]
			genState, err := getGenStateFromPath(genesisFile)
			if err != nil {
				return err
			}
			snapshotOutput := args[1]

			// Produce the map of address to total atom balance, both staked and UnbondingStake
			snapshotAccs := make(map[string]DerivedAccount)

			bankGenesis := banktypes.GenesisState{}
			if len(genState["bank"]) > 0 {
				clientCtx.Codec.MustUnmarshalJSON(genState["bank"], &bankGenesis)
			}
			for _, balance := range bankGenesis.Balances {
				address := balance.Address
				acc, ok := snapshotAccs[address]
				if !ok {
					acc = newDerivedAccount(address)
				}

				acc.LiquidBalances = balance.Coins
				snapshotAccs[address] = acc
			}

			stakingGenesis := stakingtypes.GenesisState{}
			if len(genState["staking"]) > 0 {
				clientCtx.Codec.MustUnmarshalJSON(genState["staking"], &stakingGenesis)
			}
			for _, unbonding := range stakingGenesis.UnbondingDelegations {
				address := unbonding.DelegatorAddress
				acc, ok := snapshotAccs[address]
				if !ok {
					acc = newDerivedAccount(address)
				}

				unbondingOsmos := sdk.NewInt(0)
				for _, entry := range unbonding.Entries {
					unbondingOsmos = unbondingOsmos.Add(entry.Balance)
				}

				acc.UnbondingStake = acc.UnbondingStake.Add(unbondingOsmos)

				snapshotAccs[address] = acc
			}

			// Make a map from validator operator address to the v036 validator type
			validators := make(map[string]stakingtypes.Validator)
			for _, validator := range stakingGenesis.Validators {
				validators[validator.OperatorAddress] = validator
			}

			for _, delegation := range stakingGenesis.Delegations {
				address := delegation.DelegatorAddress

				acc, ok := snapshotAccs[address]
				if !ok {
					acc = newDerivedAccount(address)
				}

				val := validators[delegation.ValidatorAddress]
				stakedOsmos := delegation.Shares.MulInt(val.Tokens).Quo(val.DelegatorShares).RoundInt()

				acc.Staked = acc.Staked.Add(stakedOsmos)

				snapshotAccs[address] = acc
			}

			// convert balances to underlying coins and sum up balances to total balance
			for addr, account := range snapshotAccs {
				// All pool shares are in liquid balances OR bonded balances (locked),
				// therefore underlyingCoinsForSelectPools on liquidBalances + bondedBalances
				// will include everything that is in one of those two pools.

				account.TotalBalances = sdk.NewCoins().
					Add(account.LiquidBalances...).
					Add(sdk.NewCoin(baseconfig.BaseDenom, account.Staked)).
					Add(sdk.NewCoin(baseconfig.BaseDenom, account.UnbondingStake)).
					Add(account.Bonded...)
				snapshotAccs[addr] = account
			}

			snapshot := DeriveSnapshot{
				NumberAccounts: uint64(len(snapshotAccs)),
				Accounts:       snapshotAccs,
			}

			fmt.Printf("# accounts: %d\n", len(snapshotAccs))

			// export snapshot json
			snapshotJSON, err := json.MarshalIndent(snapshot, "", "    ")
			if err != nil {
				return fmt.Errorf("failed to marshal snapshot: %w", err)
			}

			err = os.WriteFile(snapshotOutput, snapshotJSON, 0o644)
			return err
		},
	}

	cmd.Flags().String(FlagSelectPoolIds, "",
		"Output a special breakdown for amount LP'd to the provided pools. Usage --breakdown-by-pool-ids=1,2,605")

	return cmd
}

// StakedToCSVCmd generates a airdrop.csv from a provided exported balances.json.
func StakedToCSVCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "staked-to-csv [input-balances-file] [output-airdrop-csv]",
		Short: "Export a airdrop csv from a provided balances export",
		Long: `Export a airdrop csv from a provided balances export (from export-derive-balances)
Example:
	planqd staked-to-csv ../balances.json ../airdrop.csv
`,
		Args: cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			serverCtx := server.GetServerContextFromCmd(cmd)
			config := serverCtx.Config
			config.SetRoot(clientCtx.HomeDir)

			balancesFile := args[0]

			snapshotOutput := args[1]

			minStakeAmount, _ := cmd.Flags().GetInt64(FlagMinimumStakeAmount)

			var deriveSnapshot DeriveSnapshot

			sourceFile, err := os.Open(balancesFile)
			if err != nil {
				return err
			}
			// remember to close the file at the end of the function
			defer sourceFile.Close()

			// decode the balances json file into the struct array
			if err := json.NewDecoder(sourceFile).Decode(&deriveSnapshot); err != nil {
				return err
			}

			// create a new file to store CSV data
			outputFile, err := os.Create(snapshotOutput)
			if err != nil {
				return err
			}
			defer outputFile.Close()

			// write the header of the CSV file
			writer := csv.NewWriter(outputFile)
			defer writer.Flush()

			header := []string{"address", "staked"}
			if err := writer.Write(header); err != nil {
				return err
			}

			// iterate through all accounts, leave out accounts that do not meet the user provided min stake amount
			for _, r := range deriveSnapshot.Accounts {
				var csvRow []string
				if r.Staked.GT(sdk.NewInt(minStakeAmount)) {
					csvRow = append(csvRow, r.Address, r.Staked.String())
					if err := writer.Write(csvRow); err != nil {
						return err
					}
				}
			}

			return nil
		},
	}

	cmd.Flags().Int64(FlagMinimumStakeAmount, 0, "Specify minimum amount (non inclusive) accounts must stake to be included in airdrop (default: 0)")

	return cmd
}

// LiquidToCSVCmd generates a balances.csv from a provided exported balances.json.
func LiquidToCSVCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "staked-to-csv [input-balances-file] [output-airdrop-csv]",
		Short: "Export a airdrop csv from a provided balances export",
		Long: `Export a airdrop csv from a provided balances export (from export-derive-balances)
Example:
	planqd staked-to-csv ../balances.json ../airdrop.csv
`,
		Args: cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			serverCtx := server.GetServerContextFromCmd(cmd)
			config := serverCtx.Config
			config.SetRoot(clientCtx.HomeDir)

			balancesFile := args[0]

			snapshotOutput := args[1]

			var deriveSnapshot DeriveSnapshot

			sourceFile, err := os.Open(balancesFile)
			if err != nil {
				return err
			}
			// remember to close the file at the end of the function
			defer sourceFile.Close()

			// decode the balances json file into the struct array
			if err := json.NewDecoder(sourceFile).Decode(&deriveSnapshot); err != nil {
				return err
			}

			// create a new file to store CSV data
			outputFile, err := os.Create(snapshotOutput)
			if err != nil {
				return err
			}
			defer outputFile.Close()

			// write the header of the CSV file
			writer := csv.NewWriter(outputFile)
			defer writer.Flush()

			header := []string{"address", "balance"}
			if err := writer.Write(header); err != nil {
				return err
			}

			// iterate through all accounts, leave out accounts that do not meet the user provided min stake amount
			for _, r := range deriveSnapshot.Accounts {
				var csvRow []string
				coins := r.LiquidBalances
				foundBaseDenom, baseDenomCoin := coins.Find(baseconfig.BaseDenom)
				baseDenomString := baseDenomCoin.Amount.String()
				if foundBaseDenom && len(baseDenomString) > 18 {
					csvRow = append(csvRow, r.Address, baseDenomString[:len(baseDenomString)-18])
					if err := writer.Write(csvRow); err != nil {
						return err
					}
				}
			}

			return nil
		},
	}

	return cmd
}
