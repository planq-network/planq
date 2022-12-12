(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{589:function(t,e,o){"use strict";o.r(e);var s=o(1),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"erc20"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#erc20"}},[t._v("#")]),t._v(" "),e("code",[t._v("erc20")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[e("strong",[t._v("Note:")]),t._v(" Working on a governance proposal related to the ERC-20 Module? Make sure to look at "),e("RouterLink",{attrs:{to:"/validators/governance/overview.html"}},[t._v("Evmos Governance")]),t._v(", and specifically the "),e("a",{attrs:{href:"../../validators/governance/best_practices#erc-20-proposal"}},[t._v("best practices")]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"abstract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),e("p",[t._v("This document specifies the internal "),e("code",[t._v("x/erc20")]),t._v(" module of the Evmos Hub.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("x/erc20")]),t._v(" module enables the Evmos Hub to support a trustless, on-chain bidirectional internal conversion of tokens between Evmos' EVM and Cosmos runtimes, specifically the "),e("code",[t._v("x/evm")]),t._v(" and "),e("code",[t._v("x/bank")]),t._v(" modules. This allows token holders on Evmos to instantaneously convert their native Cosmos "),e("code",[t._v("sdk.Coins")]),t._v(' (in this document referred to as "Coin(s)") to ERC-20 (aka "Token(s)") and vice versa, while retaining fungibility with the original asset on the issuing environment/runtime (EVM or Cosmos) and preserving ownership of the ERC-20 contract.')]),t._v(" "),e("p",[t._v("This conversion functionality is fully governed by native $EVMOS token holders who manage the canonical "),e("code",[t._v("TokenPair")]),t._v(" registrations (ie, ERC20 ←→ Coin mappings). This governance functionality is implemented using the Cosmos-SDK "),e("code",[t._v("gov")]),t._v(" module with custom proposal types for registering and updating the canonical mappings respectively.")]),t._v(" "),e("p",[t._v("Why is this important? Cosmos and the EVM are two runtimes that are not compatible by default. The native Cosmos Coins cannot be used in applications that require the ERC-20 standard. Cosmos coins are held on the "),e("code",[t._v("x/bank")]),t._v(" module (with access to module methods like querying the supply or balances) and ERC-20 Tokens live on smart contracts. This problem is similar to "),e("a",{attrs:{href:"https://weth.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("wETH"),e("OutboundLink")],1),t._v(", with the difference,  that it not only applies to gas tokens (like $EVMOS), but to all Cosmos Coins (IBC vouchers, staking and gov coins, etc.) as well.")]),t._v(" "),e("p",[t._v("With the "),e("code",[t._v("x/erc20")]),t._v(" users on Evmos can")]),t._v(" "),e("ul",[e("li",[t._v("use existing native cosmos assets (like $OSMO or $ATOM) on EVM-based chains, e.g. for Trading IBC tokens on DeFi protocols, buying NFT, etc.")]),t._v(" "),e("li",[t._v("transfer existing tokens on Ethereum and other EVM-based chains to Evmos to take advantage of application-specific chains in the Cosmos ecosystem")]),t._v(" "),e("li",[t._v("build new applications that are based on ERC-20 smart contracts and have access to the Cosmos ecosystem.")])]),t._v(" "),e("h2",{attrs:{id:"contents"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),e("ol",[e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/01_concepts.html"}},[t._v("Concepts")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/02_state.html"}},[t._v("State")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/03_state_transitions.html"}},[t._v("State Transitions")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/04_transactions.html"}},[t._v("Transactions")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/05_hooks.html"}},[t._v("Hooks")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/06_events.html"}},[t._v("Events")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/07_parameters.html"}},[t._v("Parameters")])],1)]),t._v(" "),e("li",[e("strong",[e("RouterLink",{attrs:{to:"/modules/erc20/08_clients.html"}},[t._v("Clients")])],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);