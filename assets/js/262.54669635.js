(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{769:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"run-a-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-a-node"}},[e._v("#")]),e._v(" Run a Node")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Configure and run an Planq node")]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/planq/docs/validators/quickstart/installation.html"}},[e._v("Installation")])],1),e._v(" "),t("li",{attrs:{prereq:""}},[t("RouterLink",{attrs:{to:"/planq/docs/validators/quickstart/binary.html"}},[t("code",[e._v("planqd")])])],1)]),e._v(" "),t("h2",{attrs:{id:"automated-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#automated-deployment"}},[e._v("#")]),e._v(" Automated deployment")]),e._v(" "),t("p",[e._v("Run the local node by running the "),t("code",[e._v("local_node.sh")]),e._v(" script in the base directory of the repository.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[e._v("The script below will remove any pre-existing binaries installed. Use the manual deploy if you want\nto keep your binaries and configuration files.")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9sb2NhbF9ub2RlLnNoCg=="}}),e._v(" "),t("h2",{attrs:{id:"manual-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manual-deployment"}},[e._v("#")]),e._v(" Manual deployment")]),e._v(" "),t("p",[e._v("The instructions for setting up a brand new full node from scratch are the the same as running a\n"),t("RouterLink",{attrs:{to:"/planq/docs/developers/localnet/single_node.html#manual-localnet"}},[e._v("single node local testnet")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"start-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-node"}},[e._v("#")]),e._v(" Start node")]),e._v(" "),t("p",[e._v("To start your node, just type:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIHN0YXJ0IC0tanNvbi1ycGMuZW5hYmxlPXRydWUgLS1qc29uLXJwYy5hcGk9JnF1b3Q7ZXRoLHdlYjMsbmV0JnF1b3Q7Cg=="}}),e._v(" "),t("h2",{attrs:{id:"key-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-management"}},[e._v("#")]),e._v(" Key Management")]),e._v(" "),t("p",[e._v("To run a node with the same key every time: replace "),t("code",[e._v("planqd keys add $KEY")]),e._v(" in "),t("code",[e._v("./local_node.sh")]),e._v(" with:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyAmcXVvdDt5b3VyIG1uZW1vbmljIGhlcmUmcXVvdDsgfCBwbGFucWQga2V5cyBhZGQgJEtFWSAtLXJlY292ZXIK"}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("Planq currently only supports 24 word mnemonics.")])]),e._v(" "),t("p",[e._v("You can generate a new key/mnemonic with:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgYWRkICRLRVkK"}}),e._v(" "),t("p",[e._v("To export your planq key as an Ethereum private key (for use with "),t("RouterLink",{attrs:{to:"/planq/docs/users/wallets/metamask.html"}},[e._v("Metamask")]),e._v(" for example):")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgdW5zYWZlLWV4cG9ydC1ldGgta2V5ICRLRVkK"}}),e._v(" "),t("p",[e._v("For more about the available key commands, use the "),t("code",[e._v("--help")]),e._v(" flag")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgLWgK"}}),e._v(" "),t("h3",{attrs:{id:"keyring-backend-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keyring-backend-options"}},[e._v("#")]),e._v(" Keyring backend options")]),e._v(" "),t("p",[e._v("The instructions above include commands to use "),t("code",[e._v("test")]),e._v(" as the "),t("code",[e._v("keyring-backend")]),e._v(". This is an unsecured\nkeyring that doesn't require entering a password and should not be used in production. Otherwise,\nPlanq supports using a file or OS keyring backend for key storage. To create and use a file\nstored key instead of defaulting to the OS keyring, add the flag "),t("code",[e._v("--keyring-backend file")]),e._v(" to any\nrelevant command and the password prompt will occur through the command line. This can also be saved\nas a CLI config option with:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGNvbmZpZyBrZXlyaW5nLWJhY2tlbmQgZmlsZQo="}}),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[e._v("For more information about the Keyring and its backend options, click "),t("RouterLink",{attrs:{to:"/planq/docs/users/keys/keyring.html"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"enable-tracing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-tracing"}},[e._v("#")]),e._v(" Enable Tracing")]),e._v(" "),t("p",[e._v("To enable tracing when running the node, modify the last line of the "),t("code",[e._v("local_node.sh")]),e._v(" script to be the following command, where:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("$TRACER")]),e._v(" is the EVM tracer type to collect execution traces from the EVM transaction execution (eg. "),t("code",[e._v("json|struct|access_list|markdown")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("$TRACESTORE")]),e._v(" is the output file which contains KVStore tracing (eg. "),t("code",[e._v("store.txt")]),e._v(")")])]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIHN0YXJ0IC0tZXZtLnRyYWNlciAkVFJBQ0VSIC0tdHJhY2VzdG9yZSAkVFJBQ0VTVE9SRSAtLXBydW5pbmc9bm90aGluZyAkVFJBQ0UgLS1sb2dfbGV2ZWwgJExPR0xFVkVMIC0tbWluaW11bS1nYXMtcHJpY2VzPTAuMDAwMWFwbGFucSAtLWpzb24tcnBjLmFwaSBldGgsdHhwb29sLHBlcnNvbmFsLG5ldCxkZWJ1Zyx3ZWIzCg=="}}),e._v(" "),t("h2",{attrs:{id:"clearing-data-from-chain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearing-data-from-chain"}},[e._v("#")]),e._v(" Clearing data from chain")]),e._v(" "),t("h3",{attrs:{id:"reset-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reset-data"}},[e._v("#")]),e._v(" Reset Data")]),e._v(" "),t("p",[e._v("Alternatively, you can "),t("strong",[e._v("reset")]),e._v(" the blockchain database, remove the node's address book files, and reset the "),t("code",[e._v("priv_validator.json")]),e._v(" to the genesis state.")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[e._v("If you are running a "),t("strong",[e._v("validator node")]),e._v(", always be careful when doing "),t("code",[e._v("planqd unsafe-reset-all")]),e._v(". You should never use this command if you are not switching "),t("code",[e._v("chain-id")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",[t("strong",[e._v("IMPORTANT")]),e._v(": Make sure that every node has a unique "),t("code",[e._v("priv_validator.json")]),e._v(". "),t("strong",[e._v("Do not")]),e._v(" copy the "),t("code",[e._v("priv_validator.json")]),e._v(" from an old node to multiple new nodes. Running two nodes with the same "),t("code",[e._v("priv_validator.json")]),e._v(" will cause you to double sign!")])]),e._v(" "),t("p",[e._v("First, remove the outdated files and reset the data.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gJEhPTUUvLnBsYW5xZC9jb25maWcvYWRkcmJvb2suanNvbiAkSE9NRS8ucGxhbnFkL2NvbmZpZy9nZW5lc2lzLmpzb24KcGxhbnFkIHRlbmRlcm1pbnQgdW5zYWZlLXJlc2V0LWFsbCAtLWhvbWUgJEhPTUUvLnBsYW5xZAo="}}),e._v(" "),t("p",[e._v("Your node is now in a pristine state while keeping the original "),t("code",[e._v("priv_validator.json")]),e._v(" and "),t("code",[e._v("config.toml")]),e._v(". If you had any sentry nodes or full nodes setup before, your node will still try to connect to them, but may fail if they haven't also been upgraded.")]),e._v(" "),t("h3",{attrs:{id:"delete-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-data"}},[e._v("#")]),e._v(" Delete Data")]),e._v(" "),t("p",[e._v("Data for the "+e._s(e.$themeConfig.project.binary)+" binary should be stored at "),t("code",[e._v("~/."+e._s(e.$themeConfig.project.binary))]),e._v(", respectively by default. To "),t("strong",[e._v("delete")]),e._v(" the existing binaries and configuration, run:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gLXJmIH4vLnBsYW5xZAo="}}),e._v(" "),t("p",[e._v("To clear all data except key storage (if keyring backend chosen) and then you can rerun the full node installation commands from above to start the node again.")]),e._v(" "),t("h2",{attrs:{id:"recording-transactions-per-second-tps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recording-transactions-per-second-tps"}},[e._v("#")]),e._v(" Recording Transactions Per Second (TPS)")]),e._v(" "),t("p",[e._v("In order to get a progressive value of the transactions per second, we use Prometheus to return the values.\n"),e._v("\nThe Prometheus exporter runs at address http://localhost:8877 so please add this\nsection to your "),t("a",{attrs:{href:"https://opencensus.io/codelabs/prometheus/#1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prometheus installation"),t("OutboundLink")],1),e._v(" config.yaml file like this")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"Z2xvYmFsOgogIHNjcmFwZV9pbnRlcnZhbDogMTBzCgogIGV4dGVybmFsX2xhYmVsczoKICAgIG1vbml0b3I6ICdwbGFucScKCnNjcmFwZV9jb25maWdzOgogIC0gam9iX25hbWU6ICdwbGFucScKCiAgICBzY3JhcGVfaW50ZXJ2YWw6IDEwcwoKICAgIHN0YXRpY19jb25maWdzOgogICAgICAtIHRhcmdldHM6IFsnbG9jYWxob3N0Ojg4NzcnXQo="}}),e._v(" "),t("p",[e._v("and then run Prometheus like this")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cHJvbWV0aGV1cyAtLWNvbmZpZy5maWxlPXByb21fY29uZmlnLnlhbWwK"}}),e._v(" "),t("p",[e._v("and then visit the Prometheus dashboard at http://localhost:9090/ then navigate to the expression area and enter the following expression")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"cmF0ZShwbGFucWRfdHJhbnNhY3Rpb25zX3Byb2Nlc3NlZFsxbV0pCg=="}}),e._v(" "),t("p",[e._v("which will show the rate of transactions processed.")]),e._v(" "),t("h2",{attrs:{hide:"",id:"next"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[e._v("#")]),e._v(" Next")]),e._v(" "),t("p",{attrs:{hide:""}},[e._v("Learn about running a Planq "),t("RouterLink",{attrs:{to:"/planq/docs/validators/testnet.html"}},[e._v("testnet")])],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);