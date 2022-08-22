<!--
order: 8 -->

# Client

## CLI

A user can query and interact with the `feemarket` module using the CLI.

### Queries

The `query` commands allow users to query `feemarket` state.

```go
planqd query feemarket --help
```

#### Base Fee

The `base-fee` command allows users to query the block base fee by height.

```
planqd query feemarket base-fee [height] [flags]
```

Example:

```
planqd query feemarket base-fee 5...
```

Example Output:

```
base_fee: "512908936"
```

#### Block Gas

The `block-gas` command allows users to query the block gas by height.

```
planqd query feemarket block-gas [height] [flags]
```

Example:

```
planqd query feemarket block-gas 5...
```

Example Output:

```
gas: "21000"
```

#### Params

The `params` command allows users to query the module params.

```
planqd query params subspace [subspace] [key] [flags]
```

Example:

```
planqd query params subspace feemarket ElasticityMultiplier ...
```

Example Output:

```
key: ElasticityMultiplier
subspace: feemarket
value: "2"
```

## gRPC

### Queries

| Verb   | Method                                               | Description                                                                |
| ------ | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| `gRPC`  | `ethermint.feemarket.v1.Query/Params`               | Get the module params                                                      |
| `gRPC`  | `ethermint.feemarket.v1.Query/BaseFee`              | Get the block base fee                                                     |
| `gRPC`  | `ethermint.feemarket.v1.Query/BlockGas`             | Get the block gas used                                                     |
| `GET`  | `/feemarket/evm/v1/params`                           | Get the module params                                                      |
| `GET`  | `/feemarket/evm/v1/base_fee`                         | Get the block base fee                                                     |
| `GET`  | `/feemarket/evm/v1/block_gas`                        | Get the block gas used                                                     |
