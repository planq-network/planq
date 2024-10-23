(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{648:function(e,t,o){"use strict";o.r(t);var s=o(1),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[e._v("#")]),e._v(" Hooks")]),e._v(" "),t("p",[e._v("The erc20 module implements transaction hooks from the EVM in order to trigger token pair conversion.")]),e._v(" "),t("h2",{attrs:{id:"evm-hooks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evm-hooks"}},[e._v("#")]),e._v(" EVM Hooks")]),e._v(" "),t("p",[e._v("The EVM hooks allows users to convert ERC20s to Cosmos Coins by sending an Ethereum tx transfer to the module account address. This enables native conversion of tokens via Metamask and EVM-enabled wallets for both token pairs that have been registered through a native Cosmos coin or an ERC20 token. Note that additional coin/token balance checks for sender and receiver to prevent malicious contract behaviour (as performed in the "),t("RouterLink",{attrs:{to:"/modules/erc20/spec/03_state_transitions.html#21-erc20-to-coin"}},[t("code",[e._v("ConvertERC20")]),e._v(" msg")]),e._v(") cannot be done here, as the balance prior to the transaction is not avaialble in the hook.")],1),e._v(" "),t("h3",{attrs:{id:"registered-coin-erc20-to-coin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registered-coin-erc20-to-coin"}},[e._v("#")]),e._v(" Registered Coin: ERC20 to Coin")]),e._v(" "),t("ol",[t("li",[e._v("User transfers ERC20 tokens to the "),t("code",[e._v("ModuleAccount")]),e._v(" address to escrow them")]),e._v(" "),t("li",[e._v("Check if the ERC20 Token that was transferred from the sender is a native ERC20 or a native Cosmos Coin by looking at the "),t("a",{attrs:{href:"https://medium.com/mycrypto/understanding-event-logs-on-the-ethereum-blockchain-f4ae7ba50378#:~:text=A%20log%20record%20can%20be,or%20a%20change%20of%20ownership.&text=Each%20log%20record%20consists%20of,going%20on%20in%20an%20event",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum event logs"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("If the token contract address corresponds to the ERC20 representation of a native Cosmos Coin\n"),t("ol",[t("li",[e._v("Call "),t("code",[e._v("burn()")]),e._v(" ERC20 method from the  "),t("code",[e._v("ModuleAccount")]),e._v(". Note that this is the same as 1.2, but since the tokens are already on the ModuleAccount balance, we burn the tokens from the module address instead of calling "),t("code",[e._v("burnFrom()")]),e._v(". Also note that we don't need to mint because "),t("RouterLink",{attrs:{to:"/modules/erc20/spec/03_state_transitions.html#11-coin-to-erc20"}},[e._v("1.1 coin to erc20")]),e._v(" escrows the coin")],1),e._v(" "),t("li",[e._v("Transfer Cosmos Coin to the bech32 account address of the sender hex address")])])])]),e._v(" "),t("h3",{attrs:{id:"registered-erc20-erc20-to-coin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#registered-erc20-erc20-to-coin"}},[e._v("#")]),e._v(" Registered ERC20: ERC20 to Coin")]),e._v(" "),t("ol",[t("li",[e._v("User transfers coins to the"),t("code",[e._v("ModuleAccount")]),e._v(" to escrow them")]),e._v(" "),t("li",[e._v("Check if the ERC20 Token that was transferred is a native ERC20 or a native cosmos coin")]),e._v(" "),t("li",[e._v("If the token contract address is a native ERC20 token\n"),t("ol",[t("li",[e._v("Mint Cosmos Coin")]),e._v(" "),t("li",[e._v("Transfer Cosmos Coin to the bech32 account address of the sender hex")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);