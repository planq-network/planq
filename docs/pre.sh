#!/usr/bin/env bash

rm -rf modules && mkdir -p modules

for D in ../x/*; do
  if [ -d "${D}" ]; then
    rm -rf "modules/$(echo $D | awk -F/ '{print $NF}')"
    mkdir -p "modules/$(echo $D | awk -F/ '{print $NF}')" && cp -r $D/spec/* "$_"
  fi
done

cat ../x/README.md | sed 's/\.\/x/\/modules/g' | sed 's/spec\/README.md//g' | sed 's/\.\.\/docs\/building-modules\/README\.md/\/building-modules\/intro\.html/g' > ./modules/README.md

# Include the specs from Ethermint
git clone https://github.com/evmos/ethermint.git
mv ethermint/x/evm/spec/ ./modules/evm 
mv ethermint/x/feemarket/spec/ ./modules/feemarket 
rm -rf ethermint

# Include the specs from Cosmos SDK
git clone https://github.com/cosmos/cosmos-sdk.git
mv cosmos-sdk/x/auth/README.md ./modules/auth/README.md
mv cosmos-sdk/x/authz/README.md ./modules/authz/README.md
mv cosmos-sdk/x/bank/README.md ./modules/bank/README.md
mv cosmos-sdk/x/crisis/README.md ./modules/crisis/README.md
mv cosmos-sdk/x/distribution/README.md ./modules/distribution/README.md
mv cosmos-sdk/x/evidence/README.md ./modules/evidence/README.md
mv cosmos-sdk/x/gov/README.md ./modules/gov/README.md
mv cosmos-sdk/x/slashing/README.md ./modules/slashing/README.md
mv cosmos-sdk/x/staking/README.md ./modules/staking/README.md
mv cosmos-sdk/x/upgrade/README.md ./modules/upgrade/README.md
rm -rf cosmos-sdk

# Include the specs from IBC go
git clone https://github.com/cosmos/ibc-go.git
mv ibc-go/modules/apps/transfer/spec/ ./modules/transfer
mv ibc-go/modules/core/spec/ ./modules/ibc-core
rm -rf ibc-go

# Include the specs from Evmos
git clone https://github.com/evmos/evmos.git
mv evmos/x/erc20/spec/ ./modules/erc20
rm -rf evmos