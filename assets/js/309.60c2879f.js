(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{820:function(e,t,a){"use strict";a.r(t);var i=a(1),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Learn about validating on Planq")]),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Planq is based on "),t("a",{attrs:{href:"https://github.com/cometbft/cometbft/blob/master/docs/introduction/what-is-tendermint.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Core"),t("OutboundLink")],1),e._v(", which relies on a set of validators that are responsible for committing new blocks in the blockchain. These validators participate in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key.")]),e._v(" "),t("p",[e._v('Validator candidates can bond their own staking tokens and have the tokens "delegated", or staked, to them by token holders. The '),t("strong",[e._v(e._s(e.$themeConfig.project.denom))]),e._v(" is Planq's native token. At its onset, Planq will launch with 150 validators. The validators are determined by who has the most stake delegated to them - the top 150 validator candidates with the most stake will become Planq validators.")]),e._v(" "),t("p",[e._v("Validators and their delegators will earn "+e._s(e.$themeConfig.project.denom)+" as block provisions and tokens as transaction fees through execution of the Tendermint consensus protocol. Initially, transaction fees will be paid in PLANQ but in the future, any token in the Cosmos ecosystem will be valid as fee tender if it is whitelisted by governance. Note that validators can set commission on the fees their delegators receive as additional incentive.")]),e._v(" "),t("p",[e._v("If validators double sign, are frequently offline or do not participate in governance, their staked "+e._s(e.$themeConfig.project.denom)+" (including "+e._s(e.$themeConfig.project.denom)+" of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.")]),e._v(" "),t("h2",{attrs:{id:"hardware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),t("p",[e._v("Validators should set up a physical operation secured with restricted access. A good starting place, for example, would be co-locating in secure data centers.")]),e._v(" "),t("p",[e._v("Validators should expect to equip their datacenter location with redundant power, connectivity, and storage backups. Expect to have several redundant networking boxes for fiber, firewall and switching and then small servers with redundant hard drive and failover. Hardware can be on the low end of datacenter gear to start out with.")]),e._v(" "),t("p",[e._v("We anticipate that network requirements will be low initially. Bandwidth, CPU and memory requirements will rise as the network grows. Large hard drives are recommended for storing years of blockchain history.")]),e._v(" "),t("h3",{attrs:{id:"supported-os"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-os"}},[e._v("#")]),e._v(" Supported OS")]),e._v(" "),t("p",[e._v("We officially support macOS, Windows and Linux only in the following architectures:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("darwin/arm64")])]),e._v(" "),t("li",[t("code",[e._v("darwin/x86_64")])]),e._v(" "),t("li",[t("code",[e._v("linux/arm64")])]),e._v(" "),t("li",[t("code",[e._v("linux/amd64")])]),e._v(" "),t("li",[t("code",[e._v("windows/x86_64")])])]),e._v(" "),t("h3",{attrs:{id:"minimum-requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimum-requirements"}},[e._v("#")]),e._v(" Minimum Requirements")]),e._v(" "),t("p",[e._v("To run mainnet or testnet validator nodes, you will need a machine with the following minimum hardware requirements:")]),e._v(" "),t("ul",[t("li",[e._v("4 or more physical CPU cores")]),e._v(" "),t("li",[e._v("At least 500GB of SSD disk storage")]),e._v(" "),t("li",[e._v("At least 32GB of memory (RAM)")]),e._v(" "),t("li",[e._v("At least 100mbps network bandwidth")])]),e._v(" "),t("p",[e._v("As the usage of the blockchain grows, the server requirements may increase as well, so you should have a plan for updating your server as well.")]),e._v(" "),t("h2",{attrs:{id:"get-involved"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-involved"}},[e._v("#")]),e._v(" Get Involved")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("Seek legal advice if you intend to run a validator.")])]),e._v(" "),t("p",[e._v("Set up a dedicated validator's website, social profile (eg: Twitter) and signal your intention to become a validator on Discord. This is important since users will want to have information about the entity they are staking their PLANQ to.")]),e._v(" "),t("h2",{attrs:{id:"community"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#community"}},[e._v("#")]),e._v(" Community")]),e._v(" "),t("p",[e._v("Discuss the finer details of being a validator and seek advise from the rest of the validator community on our "),t("a",{attrs:{href:"https://discord.gg/jGTPyYmpsq",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);