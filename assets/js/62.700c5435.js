(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{474:function(e,t,s){e.exports=s.p+"assets/img/keplr_approve_chain.6d5ba37c.png"},475:function(e,t,s){e.exports=s.p+"assets/img/keplr_transaction.8fe00c29.png"},476:function(e,t,s){e.exports=s.p+"assets/img/faucet_web_page.0dc480c5.png"},733:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faucet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faucet"}},[e._v("#")]),e._v(" Faucet")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Check how to obtain testnet tokens from the Planq faucet website")]),e._v(" "),t("p",[e._v("The Planq Testnet Faucet distributes small amounts of "+e._s(e.$themeConfig.project.testnet_denom)+" to anyone who can provide a valid testnet address for free. Request funds from the faucet either by using the "),t("RouterLink",{attrs:{to:"/planq/docs/users/wallets/keplr.html"}},[e._v("Keplr Wallet")]),e._v(" or follow the instructions on this page.")],1),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("Follow the "),t("RouterLink",{attrs:{to:"/planq/docs/users/wallets/metamask.html"}},[e._v("Metamask")]),e._v(", "),t("RouterLink",{attrs:{to:"/planq/docs/users/wallets/keplr.html"}},[e._v("Keplr")]),e._v(" or "),t("RouterLink",{attrs:{to:"/planq/docs/users/keys/keyring.html"}},[e._v("Keyring")]),e._v(" guides for more info on how to setup your wallet account.")],1)]),e._v(" "),t("h2",{attrs:{id:"request-testnet-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-testnet-tokens"}},[e._v("#")]),e._v(" Request Testnet tokens")]),e._v(" "),t("p",[e._v("Once you are signed in to the Keplr extension, visit the "),t("a",{attrs:{href:"https://faucet.evmos.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Faucet"),t("OutboundLink")],1),e._v(" to request tokens for the testnet. Click the "),t("code",[e._v("Request Funds with Keplr")]),e._v(" button. Then approve the both following pop ups "),t("code",[e._v("Chain Add Request")]),e._v(" and "),t("code",[e._v("Request Connection")]),e._v(" to add the "+e._s(e.$themeConfig.project.name)+" testnet chain ("),t("code",[e._v("planq_"+e._s(e.$themeConfig.project.testnet_chain_id)+"-"+e._s(e.$themeConfig.project.testnet_version_number))]),e._v(") to Keplr and approve the connection.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(474),alt:"chain add request"}})]),e._v(" "),t("p",[e._v("After approval, you can see a transaction confirmation informing you that "+e._s(e.$themeConfig.project.testnet_denom)+" have been successfully transferred to your "),t("RouterLink",{attrs:{to:"/planq/docs/users/technical_concepts/accounts.html#address-formats-for-clients"}},[e._v("planq address")]),e._v(" on the testnet.")],1),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[t("strong",[e._v("Note")]),e._v(": only Ethereum compatible addresses (i.e "),t("code",[e._v("eth_secp256k1")]),e._v(" keys) are supported on Planq.")])]),e._v(" "),t("p",[t("img",{attrs:{src:s(475),alt:"chain add request"}})]),e._v(" "),t("p",[e._v("Alternatively you can also fill in your address on the input field in Bech32 ("),t("code",[e._v("plq1...")]),e._v(") or Hex ("),t("code",[e._v("0x...")]),e._v(") format.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("If you use your Bech32 address, make sure you input the "),t("RouterLink",{attrs:{to:"/planq/docs/users/technical_concepts/accounts.html#addresses-and-public-keys"}},[e._v("account address")]),e._v(" ("),t("code",[e._v("plq1...")]),e._v(") and "),t("strong",[e._v("NOT")]),e._v(" the validator operator address ("),t("code",[e._v("plqvaloper1...")]),e._v(")")],1)]),e._v(" "),t("p",[t("img",{attrs:{src:s(476),alt:"faucet site"}})]),e._v(" "),t("p",[e._v("View your account balance either by clicking on the Keplr extension or by using the "),t("a",{attrs:{href:"https://testnet.mintscan.io/evmos-testnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testnet Explorer"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[t("strong",[e._v("Note")]),e._v(": Keplr might not display the amount of "+e._s(e.$themeConfig.project.testnet_denom)+" transferred by the faucet, as it might be smaller than the number of decimals displayed in the Keplr extension.")])]),e._v(" "),t("h2",{attrs:{id:"rate-limits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rate-limits"}},[e._v("#")]),e._v(" Rate limits")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("All addresses "),t("strong",[e._v("MUST")]),e._v(" be authenticated using ReCAPTCHA before requesting tokens.")])]),e._v(" "),t("p",[e._v("To prevent the faucet account from draining the available funds, the Planq testnet faucet imposes a maximum number of requests for a period of time. By default, the faucet service accepts 1 request per day per address. You can request "+e._s(e.$themeConfig.project.testnet_denom)+" from the faucet for each address only once every 24h. If you try to request multiple times within the 24h cooldown phase, no transaction will be initiated. Please try again in 24 hours.")]),e._v(" "),t("h2",{attrs:{id:"amount"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amount"}},[e._v("#")]),e._v(" Amount")]),e._v(" "),t("p",[e._v("For each request, the faucet transfers 1 "+e._s(e.$themeConfig.project.testnet_denom)+" to the given address.")]),e._v(" "),t("h2",{attrs:{id:"faucet-addresses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faucet-addresses"}},[e._v("#")]),e._v(" Faucet Addresses")]),e._v(" "),t("p",[e._v("The public faucet addresses for the testnet are:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Hex")]),e._v(": "),t("a",{attrs:{href:"https://evm.evmos.dev/address/0xBaE9A7A2210F94511F5050348251d0d7113E2cE3/transactions",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("0xBaE9A7A2210F94511F5050348251d0d7113E2cE3")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("Bech32")]),e._v(": "),t("a",{attrs:{href:"https://testnet.mintscan.io/evmos/account/plq1ht560g3pp729z86s2q6gy5ws6ugnut8r4uhyth",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("plq1ht560g3pp729z86s2q6gy5ws6ugnut8r4uhyth")]),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);