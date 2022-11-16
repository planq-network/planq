<!--
order: 1
-->

# Module Accounts

Some modules have their own module account. Think of this as a wallet that can only be controlled by that module.
Below is a table of modules, their respective wallet addresses and permissions.

### Account Permisions and their meaning

The `burner` permission means this account has the permission to burn or destroy tokens.
The `minter` permission means this account has permission to mint or create new tokens.
The `staking` permission means this account has permission to stake tokens on behalf of it's owner.

| Name                     | Address                                             | Permissions        |
|:-------------------------| :-------------------------------------------------- | :----------------- |
| `erc20`                  | [plq1glht96kr2rseywuvhhay894qw7ekuc4qrurx04](https://explorer.planq.network/accounts/plq1glht96kr2rseywuvhhay894qw7ekuc4qrurx04)   | `minter` `burner`  |
| `fee_collector`          | [plq17xpfvakm2amg962yls6f84z3kell8c5lepnudw](https://explorer.planq.network/accounts/plq17xpfvakm2amg962yls6f84z3kell8c5lepnudw)   | `minter` `burner`  |
| `transfer`               | [plq1yl6hdjhmkf37639730gffanpzndzdpmh88x43s](https://explorer.planq.network/accounts/plq1yl6hdjhmkf37639730gffanpzndzdpmh88x43s)   | `minter` `burner`  |
| `bonded_tokens_pool`     | [plq1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3urenly](https://explorer.planq.network/accounts/plq1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3urenly)   | `burner` `staking` |
| `not_bonded_tokens_pool` | [plq1tygms3xhhs3yv487phx3dw4a95jn7t7lgr9zfs](https://explorer.planq.network/accounts/plq1tygms3xhhs3yv487phx3dw4a95jn7t7lgr9zfs)   | `burner` `staking` |
| `gov`                    | [plq10d07y265gmmuvt4z0w9aw880jnsr700jn6resq](https://explorer.planq.network/accounts/plq10d07y265gmmuvt4z0w9aw880jnsr700jn6resq)   | `burner`           |
| `mint`                   | [plq1m3h30wlvsf8llruxtpukdvsy0km2kum8pfhypn](https://explorer.planq.network/accounts/plq1m3h30wlvsf8llruxtpukdvsy0km2kum8pfhypn)   | `burner`           |
| `distribution`           | [plq1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8w85q0v](https://explorer.planq.network/accounts/plq1jv65s3grqf6v6jl3dp4t6c9t9rk99cd8w85q0v)   | `none`             |
| `evm`                    | [plq1vqu8rska6swzdmnhf90zuv0xmelej4lqy24gjm](https://explorer.planq.network/accounts/plq1vqu8rska6swzdmnhf90zuv0xmelej4lqy24gjm)   | `minter` `burner`  |
