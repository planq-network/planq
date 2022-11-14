#!/bin/bash

KEY="dev0"
CHAINID="planq_7070-1"
MONIKER="mymoniker"
DATA_DIR=$(mktemp -d -t planq-datadir.XXXXX)

echo "create and add new keys"
./planqd keys add $KEY --home $DATA_DIR --no-backup --chain-id $CHAINID --algo "eth_secp256k1" --keyring-backend test
echo "init Planq with moniker=$MONIKER and chain-id=$CHAINID"
./planqd init $MONIKER --chain-id $CHAINID --home $DATA_DIR
echo "prepare genesis: Allocate genesis accounts"
./planqd add-genesis-account \
"$(./planqd keys show $KEY -a --home $DATA_DIR --keyring-backend test)" 1000000000000000000aplanq,1000000000000000000stake \
--home $DATA_DIR --keyring-backend test
echo "prepare genesis: Sign genesis transaction"
./planqd gentx $KEY 1000000000000000000stake --keyring-backend test --home $DATA_DIR --keyring-backend test --chain-id $CHAINID
echo "prepare genesis: Collect genesis tx"
./planqd collect-gentxs --home $DATA_DIR
echo "prepare genesis: Run validate-genesis to ensure everything worked and that the genesis file is setup correctly"
./planqd validate-genesis --home $DATA_DIR

echo "starting planq node $i in background ..."
./planqd start --pruning=nothing --rpc.unsafe \
--keyring-backend test --home $DATA_DIR \
>$DATA_DIR/node.log 2>&1 & disown

echo "started planq node"
tail -f /dev/null