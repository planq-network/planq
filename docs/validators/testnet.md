<!--
order: 4
-->

# Join a Testnet

This document outlines the steps to join an existing testnet {synopsis}

:::warning
Currently there is no public testnet available, the next upcoming one will be announced soon.
:::

## Pick a Testnet

You specify the network you want to join by setting the **genesis file** and **seeds**. If you need more information about past networks, check our [testnets repo](https://github.com/planq-network/networks/testnet).

| Testnet Chain ID | Description                       | Site | Version                                                                                  | Status  |
| ---------------- | --------------------------------- |------| ---------------------------------------------------------------------------------------- | ------- |
| `planq_7000-1`   | Arsia Mons Testnet                | -    | [`v0.1.x`](https://github.com/planq-network/planq/releases)                                    | `Stale` |

## Install `planqd`

Follow the [installation](./quickstart/installation.md) document to install the {{ $themeConfig.project.name }} binary `{{ $themeConfig.project.binary }}`.

:::warning
Make sure you have the right version of `{{ $themeConfig.project.binary }}` installed.
:::

### Save Chain ID

We recommend saving the testnet `chain-id` into your `{{ $themeConfig.project.binary }}`'s `client.toml`. This will make it so you do not have to manually pass in the `chain-id` flag for every CLI command.

::: tip
See the Official [Chain IDs](./../users/technical_concepts/chain_id.md#official-chain-ids) for reference.
:::

```bash
planqd config chain-id planq_7000-1
```

## Initialize Node

We need to initialize the node to create all the necessary validator and node configuration files:

```bash
planqd init <your_custom_moniker> --chain-id planq_7000-1
```

::: danger
Monikers can contain only ASCII characters. Using Unicode characters will render your node unreachable.
:::

By default, the `init` command creates your `~/.planqd` (i.e `$HOME`) directory with subfolders `config/` and `data/`.
In the `config` directory, the most important files for configuration are `app.toml` and `config.toml`.

## Genesis & Seeds

### Copy the Genesis File

Check the `genesis.json` file from the [`archive`](https://raw.githubusercontent.com/planq-network/networks/main/testnet//planq_7000-1/genesis.json) and copy it over to the `config` directory: `~/.planqd/config/genesis.json`. This is a genesis file with the chain-id and genesis accounts balances.

```bash
sudo apt install -y unzip wget
wget -P ~/.planqd/config https://raw.githubusercontent.com/planq-network/networks/main/testnet//planq_7000-1/genesis.json
```

Then verify the correctness of the genesis configuration file:

```bash
planqd validate-genesis
```

### Add Seed Nodes

Your node needs to know how to find [peers](https://docs.tendermint.com/v0.34/tendermint-core/using-tendermint.html#peers). You'll need to add healthy [seed nodes](https://docs.tendermint.com/v0.34/tendermint-core/using-tendermint.html#seed) to `$HOME/.planqd/config/config.toml`. The [`testnets`](https://github.com/evmos/testnets) repo contains links to some seed nodes.

Edit the file located in `~/.planqd/config/config.toml` and the `seeds` to the following:

```toml
#######################################################
###           P2P Configuration Options             ###
#######################################################
[p2p]

# ...

# Comma separated list of seed nodes to connect to
seeds = "<node-id>@<ip>:<p2p port>"
```

You can use the following code to get seeds from the repo and add it to your config:

```bash
SEEDS=`curl -sL https://raw.githubusercontent.com/tharsis/testnets/main/planq_7000-1/seeds.txt | awk '{print $1}' | paste -s -d, -`
sed -i.bak -e "s/^seeds =.*/seeds = \"$SEEDS\"/" ~/.planqd/config/config.toml
```

:::tip
For more information on seeds and peers, you can the Tendermint [P2P documentation](https://docs.tendermint.com/master/spec/p2p/peer.html).
:::

### Add Persistent Peers

We can set the [`persistent_peers`](https://docs.tendermint.com/v0.34/tendermint-core/using-tendermint.html#persistent-peer) field in `~/.planqd/config/config.toml` to specify peers that your node will maintain persistent connections with. You can retrieve them from the list of
available peers on the [`testnets`](https://github.com/planq-network/networks/testnet) repo.

A list of available persistent peers is also available in the `#find-peers` channel in the [Planq Discord](https://discord.gg/jGTPyYmpsq). You can get a random 10 entries from the `peers.txt` file in the `PEERS` variable by running the following command:

```bash
PEERS=`curl -sL https://raw.githubusercontent.com/tharsis/testnets/main/planq_7000-1/peers.txt | sort -R | head -n 10 | awk '{print $1}' | paste -s -d, -`
```

Use `sed` to include them into the configuration. You can also add them manually:

```bash
sed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \"$PEERS\"/" ~/.planqd/config/config.toml
```

## Run a Testnet Validator

Claim your testnet {{ $themeConfig.project.testnet_denom }} on the [faucet](./../developers/testnet/faucet.md) using your validator account address and submit your validator account address:

::: tip
For more details on how to run your validator, follow [these](./setup/run_validator.md) instructions.
:::

```bash
planqd tx staking create-validator \
  --amount=1000000000000atplanq \
  --pubkey=$(planqd tendermint show-validator) \
  --moniker="PlanqWhale" \
  --chain-id=<chain_id> \
  --commission-rate="0.10" \
  --commission-max-rate="0.20" \
  --commission-max-change-rate="0.01" \
  --min-self-delegation="1000000" \
  --gas="auto" \
  --gas-prices="0.025atplanq" \
  --from=<key_name>
```

## Start testnet

The final step is to [start the nodes](./quickstart/run_node.md#start-node). Once enough voting power (+2/3) from the genesis validators is up-and-running, the testnet will start producing blocks.

```bash
planqd start
```

## Upgrading Your Node

::: tip
These instructions are for full nodes that have ran on previous versions of and would like to upgrade to the latest testnet version.
:::

### Reset Data

:::warning
If the version <new_version> you are upgrading to is not breaking from the previous one, you **should not** reset the data. If this is the case you can skip to [Restart](#restart)
:::

First, remove the outdated files and reset the data.

```bash
rm $HOME/.planqd/config/addrbook.json $HOME/.planqd/config/genesis.json
planqd tendermint unsafe-reset-all --home $HOME/.planqd
```

Your node is now in a pristine state while keeping the original `priv_validator.json` and `config.toml`. If you had any sentry nodes or full nodes setup before,
your node will still try to connect to them, but may fail if they haven't also
been upgraded.

::: danger Warning
Make sure that every node has a unique `priv_validator.json`. Do not copy the `priv_validator.json` from an old node to multiple new nodes. Running two nodes with the same `priv_validator.json` will cause you to double sign.
:::

### Restart

To restart your node, just type:

```bash
planqd start
```

## Share your Peer

You can share your peer to posting it in the `#find-peers` channel in the [Planq Discord](https://discord.gg/jGTPyYmpsq).

::: tip
To get your Node ID use

```bash
planqd tendermint show-node-id
```

:::

## State Syncing a Node

If you want to join the network using State Sync (quick, but not applicable for archive nodes), check our [State Sync](https://docs.planq.network/validators/setup/statesync.html) page
