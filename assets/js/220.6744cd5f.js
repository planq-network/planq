(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{719:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"wallet-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wallet-integration"}},[e._v("#")]),e._v(" Wallet Integration")]),e._v(" "),t("p",{attrs:{synopsis:""}},[e._v("Learn how to properly integrate "),t("a",{attrs:{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Metamask"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://www.keplr.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr"),t("OutboundLink")],1),e._v(" with a dApp on Planq.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[t("strong",[e._v("Note")]),e._v(": want to learn more about wallet integration beyond what's covered here? Check out both the "),t("a",{attrs:{href:"https://docs.metamask.io/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaMask Wallet documentation"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://docs.keplr.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr Wallet documentation"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"pre-requisite-readings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite Readings")]),e._v(" "),t("ul",[t("li",{attrs:{prereq:""}},[t("a",{attrs:{href:"https://docs.metamask.io/guide/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaMask documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",{attrs:{prereq:""}},[t("a",{attrs:{href:"https://docs.keplr.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keplr documentation"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"implementation-checklist"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-checklist"}},[e._v("#")]),e._v(" Implementation Checklist")]),e._v(" "),t("p",[e._v("The integration implementation checklist for dApp developers consists of three categories:")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"#frontend"}},[e._v("Frontend features")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#transactions"}},[e._v("Transactions and wallet interactions")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#connections"}},[e._v("Client-side provider")])])]),e._v(" "),t("h3",{attrs:{id:"frontend"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontend"}},[e._v("#")]),e._v(" Frontend")]),e._v(" "),t("p",[e._v('Make sure to create a wallet-connection button for Metamask and/or Keplr on the frontend of the application. For instance, consider the "Connect to a wallet" button on the interface of '),t("a",{attrs:{href:"https://app.diffusion.fi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Diffusion Finance"),t("OutboundLink")],1),e._v(" or the analagous button on the interface of "),t("a",{attrs:{href:"https://app.evmoswap.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EvmoSwap"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"transactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),t("p",[e._v("Developers enabling transactions on their dApp have to "),t("a",{attrs:{href:"#determining-wallet-type"}},[e._v("determine wallet type")]),e._v(" of the user, "),t("a",{attrs:{href:"#create-the-transaction"}},[e._v("create the transaction")]),e._v(", "),t("a",{attrs:{href:"#sign-and-broadcast-the-transaction"}},[e._v("request signatures")]),e._v(" from the corresponding wallet, and finally "),t("a",{attrs:{href:"#sign-and-broadcast-the-transaction"}},[e._v("broadcast the transaction")]),e._v(" to the network.")]),e._v(" "),t("h4",{attrs:{id:"determining-wallet-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#determining-wallet-type"}},[e._v("#")]),e._v(" Determining Wallet Type")]),e._v(" "),t("p",[e._v("Developers should determine whether users are using Keplr or MetaMask. Whether MetaMask or Keplr is installed on the user device can be determined by checking the corresponding "),t("code",[e._v("window.ethereum")]),e._v(" or "),t("code",[e._v("window.keplr")]),e._v(" value.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("For MetaMask")]),e._v(": "),t("code",[e._v("await window.ethereum.enable(chainId);")])]),e._v(" "),t("li",[t("strong",[e._v("For Keplr")]),e._v(": "),t("code",[e._v("await window.keplr.enable(chainId);")])])]),e._v(" "),t("p",[e._v("If either "),t("code",[e._v("window.ethereum")]),e._v(" or "),t("code",[e._v("window.keplr")]),e._v(" returns "),t("code",[e._v("undefined")]),e._v(" after "),t("code",[e._v("document.load")]),e._v(", then MetaMask (or, correspondingly, Keplr) is not installed. There are several ways to wait for the load event to check the status: for instance, developers can register functions to "),t("code",[e._v("window.onload")]),e._v(", or they can track the document's ready state through the document event listener.")]),e._v(" "),t("p",[e._v("After the user's wallet type has been determined, developers can proceed with creating, signing, and sending transactions.")]),e._v(" "),t("h4",{attrs:{id:"create-the-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-transaction"}},[e._v("#")]),e._v(" Create the Transaction")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[t("strong",[e._v("Note")]),e._v(": The example below uses the Planq Testnet "),t("code",[e._v("chainID")]),e._v(". For more info, check the Planq Chain IDs reference document "),t("RouterLink",{attrs:{to:"/planq/docs/users/technical_concepts/chain_id.html"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),t("p",[e._v("Developers can create "),t("code",[e._v("MsgSend")]),e._v(" transactions using the "),t("RouterLink",{attrs:{to:"/planq/docs/developers/libraries/evmosjs.html"}},[e._v("evmosjs")]),e._v(" library.")],1),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgY3JlYXRlTWVzc2FnZVNlbmQgfSBmcm9tIEB0aGFyc2lzL3RyYW5zYWN0aW9ucwoKY29uc3QgY2hhaW4gPSB7CiAgICBjaGFpbklkOiA3MDAwLAogICAgY29zbW9zQ2hhaW5JZDogJ3BsYW5xXzcwMDAtMScsCn0KCmNvbnN0IHNlbmRlciA9IHsKICAgIGFjY291bnRBZGRyZXNzOiAncGxxMW14OW5xazVhZ3Zsc3Z0MnljODI1OW53enRteHE3empxNTBteGtwJywKICAgIHNlcXVlbmNlOiAxLAogICAgYWNjb3VudE51bWJlcjogOSwKICAgIHB1YmtleTogJ0FnVHcrNHYwZGFJcnhzTlNXNEZjUStJb2luZ1BzZUZ3SE8xRG5zc3lvT3FaJywKfQoKY29uc3QgZmVlID0gewogICAgYW1vdW50OiAnMjAnLAogICAgZGVub206ICdhcGxhbnEnLAogICAgZ2FzOiAnMjAwMDAwJywKfQoKY29uc3QgbWVtbyA9ICcnCgpjb25zdCBwYXJhbXMgPSB7CiAgICBkZXN0aW5hdGlvbkFkZHJlc3M6ICdwbHExcG1rMnIzMnNzcXdwczQyeTNjOWQ0Y2xxbGNhNDAzeWQ5d3ltZ3InLAogICAgYW1vdW50OiAnMScsCiAgICBkZW5vbTogJ2FwbGFucScsCn0KCmNvbnN0IG1zZyA9IGNyZWF0ZU1lc3NhZ2VTZW5kKGNoYWluLCBzZW5kZXIsIGZlZSwgbWVtbywgcGFyYW1zKQoKLy8gbXNnLnNpZ25EaXJlY3QgaXMgdGhlIHRyYW5zYWN0aW9uIGluIEtlcGxyIGZvcm1hdAovLyBtc2cubGVnYWN5QW1pbm8gaXMgdGhlIHRyYW5zYWN0aW9uIHdpdGggbGVnYWN5IGFtaW5vCi8vIG1zZy5laXBUb1NpZ24gaXMgdGhlIEVJUDcxMiBkYXRhIHRvIHNpZ24gd2l0aCBtZXRhbWFzawo="}}),e._v(" "),t("h4",{attrs:{id:"sign-and-broadcast-the-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sign-and-broadcast-the-transaction"}},[e._v("#")]),e._v(" Sign and Broadcast the Transaction")]),e._v(" "),t("p",[e._v("After creating the transaction, developers need to send the payload to the appropriate wallet to be signed ("),t("a",{attrs:{href:"https://docs.keplr.app/api/#sign-direct-protobuf",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("msg.signDirect")]),t("OutboundLink")],1),e._v(" is the transaction in Keplr format, and "),t("code",[e._v("msg.eipToSign")]),e._v(" is the "),t("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-712",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("EIP712")]),t("OutboundLink")],1),e._v(" data to sign with MetaMask).")]),e._v(" "),t("p",[e._v("With the signature, we add a Web3Extension to the transaction and broadcast it to the Planq node.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Ly8gTm90ZSB0aGF0IHRoaXMgZXhhbXBsZSBpcyBmb3IgTWV0YU1hc2ssIHVzaW5nIGV2bW9zanMKCi8vIEZvbGxvdyB0aGUgcHJldmlvdXMgY29kZSBibG9jayB0byBnZW5lcmF0ZSB0aGUgbXNnIG9iamVjdAppbXBvcnQgeyBldm1vc1RvRXRoIH0gZnJvbSAnQHRoYXJzaXMvYWRkcmVzcy1jb252ZXJ0ZXInCmltcG9ydCB7IGdlbmVyYXRlRW5kcG9pbnRCcm9hZGNhc3QsIGdlbmVyYXRlUG9zdEJvZHlCcm9hZGNhc3QgfSBmcm9tICdAdGhhcnNpcy9wcm92aWRlcicKaW1wb3J0IHsgY3JlYXRlVHhSYXdFSVA3MTIsIHNpZ25hdHVyZVRvV2ViM0V4dGVuc2lvbiB9IGZyb20gJ0B0aGFyc2lzL3RyYW5zYWN0aW9ucycKCi8vIEluaXQgTWV0YW1hc2sKYXdhaXQgd2luZG93LmV0aGVyZXVtLmVuYWJsZSgpOwoKLy8gUmVxdWVzdCB0aGUgc2lnbmF0dXJlCmxldCBzaWduYXR1cmUgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7CiAgICBtZXRob2Q6ICdldGhfc2lnblR5cGVkRGF0YV92NCcsCiAgICBwYXJhbXM6IFtldm1vc1RvRXRoKHNlbmRlci5hY2NvdW50QWRkcmVzcyksIEpTT04uc3RyaW5naWZ5KG1zZy5laXBUb1NpZ24pXSwKfSk7CgovLyBUaGUgY2hhaW4gYW5kIHNlbmRlciBvYmplY3RzIGFyZSB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXMgZXhhbXBsZQpsZXQgZXh0ZW5zaW9uID0gc2lnbmF0dXJlVG9XZWIzRXh0ZW5zaW9uKGNoYWluLCBzZW5kZXIsIHNpZ25hdHVyZSkKCi8vIENyZWF0ZSB0aGUgdHhSYXcKbGV0IHJhd1R4ID0gY3JlYXRlVHhSYXdFSVA3MTIobXNnLmxlZ2FjeUFtaW5vLmJvZHksIG1zZy5sZWdhY3lBbWluby5hdXRoSW5mbywgZXh0ZW5zaW9uKQoKLy8gQnJvYWRjYXN0IGl0CmNvbnN0IHBvc3RPcHRpb25zID0gewogICAgbWV0aG9kOiAnUE9TVCcsCiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSwKICAgIGJvZHk6IGdlbmVyYXRlUG9zdEJvZHlCcm9hZGNhc3QocmF3VHgpLAp9OwoKbGV0IGJyb2FkY2FzdFBvc3QgPSBhd2FpdCBmZXRjaCgKICAgIGBodHRwczovL2V2bS1ycGMucGxhbnEubmV0d29yayR7Z2VuZXJhdGVFbmRwb2ludEJyb2FkY2FzdCgpfWAsCiAgICBwb3N0T3B0aW9ucwopOwpsZXQgcmVzcG9uc2UgPSBhd2FpdCBicm9hZGNhc3RQb3N0Lmpzb24oKTsK"}}),e._v(" "),t("h4",{attrs:{id:"sign-and-broadcast-evm-transactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sign-and-broadcast-evm-transactions"}},[e._v("#")]),e._v(" Sign and Broadcast EVM Transactions")]),e._v(" "),t("p",[e._v("Developers can use Metamask or Keplr to help users sign off on EVM transactions with either Ledger or software keys, to manage NFTs, exchange ERC-20 tokens, and more.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgSnNvblJwY1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJzsKaW1wb3J0IHsgZXZtb3NUb0V0aCB9IGZyb20gJnF1b3Q7QHRoYXJzaXMvYWRkcmVzcy1jb252ZXJ0ZXImcXVvdDsKY29uc3QgcHJvdmlkZXIgPSBuZXcgSnNvblJwY1Byb3ZpZGVyKCdodHRwczovL2V2bS1ycGMucGxhbnEubmV0d29yaycpOwpjb25zdCBjaGFpbklkID0gJ3BsYW5xXzcwNzAtMic7CgovLyBFSVAtMTU1OQphc3luYyBmdW5jdGlvbiBzaWduQW5kQnJvYWRjYXN0RXRoZXJldW1UeCgpIHsKCiAgLy8gRW5hYmxlIGFjY2VzcyB0byBQbGFucSBvbiBLZXBscgogIGF3YWl0IHdpbmRvdy5rZXBsci5lbmFibGUoY2hhaW5JZCk7CiAgCiAgLy8gR2V0IEtlcGxyIHNpZ25lciBhZGRyZXNzCiAgY29uc3Qgb2ZmbGluZVNpZ25lciA9IHdpbmRvdy5nZXRPZmZsaW5lU2lnbmVyKGNoYWluSWQpOwogIGxldCB3YWxsZXRzID0gYXdhaXQgb2ZmbGluZVNpZ25lci5nZXRBY2NvdW50cygpOwogIGNvbnN0IHNpZ25lckFkZHJlc3NCZWNoMzIgPSB3YWxsZXRzWzBdLmFkZHJlc3M7CgogIC8vIEdldCBLZXBsciBzaWduZXIgYWRkcmVzcyBpbiBoZXgKICBjb25zdCBzaWduZXJBZGRyZXNzRXRoID0gZXZtb3NUb0V0aChzaWduZXJBZGRyZXNzQmVjaDMyKTsKCiAgLy8gRGVmaW5lIEV0aGVyZXVtIFR4CiAgbGV0IGV0aFNlbmRUeCA9IHsKICAgIGNoYWluSWQ6IDcwNzAsCiAgICB0bzogJzB4NDY0NjQ2NDY0NjQ2NDY0NjQ2NDY0NjQ2NDY0NjQ2NDY0NjQ2NDY0NicsCiAgICB2YWx1ZTogJzB4NDYnLAogICAgZGF0YTogJzB4MDQwNjA4MGEnLAogICAgYWNjZXNzTGlzdDogW10sCiAgICB0eXBlOiAyLAogIH0KCiAgLy8gQ2FsY3VsYXRlIGFuZCBzZXQgbm9uY2UKICBjb25zdCBub25jZSA9IGF3YWl0IHByb3ZpZGVyLmdldFRyYW5zYWN0aW9uQ291bnQoc2lnbmVyQWRkcmVzc0V0aCk7CiAgZXRoU2VuZFR4Wydub25jZSddID0gbm9uY2U7CgogIC8vIENhbGN1bGF0ZSBhbmQgc2V0IGdhcyBmZWVzCiAgY29uc3QgZ2FzTGltaXQgPSBhd2FpdCBwcm92aWRlci5lc3RpbWF0ZUdhcyhldGhTZW5kVHgpOwogIGNvbnN0IGdhc0ZlZSA9IGF3YWl0IHByb3ZpZGVyLmdldEZlZURhdGEoKTsKCiAgZXRoU2VuZFR4WydnYXNMaW1pdCddID0gZ2FzTGltaXQudG9IZXhTdHJpbmcoKTsKICBpZiAoIWdhc0ZlZS5tYXhQcmlvcml0eUZlZVBlckdhcyB8fCAhZ2FzRmVlLm1heEZlZVBlckdhcykgeyAKICAgIC8vIEhhbmRsZSBlcnJvcgogICAgcmV0dXJuOwogIH0KICBldGhTZW5kVHhbJ21heFByaW9yaXR5RmVlUGVyR2FzJ10gPSBnYXNGZWUubWF4UHJpb3JpdHlGZWVQZXJHYXMudG9IZXhTdHJpbmcoKTsKICBldGhTZW5kVHhbJ21heEZlZVBlckdhcyddID0gZ2FzRmVlLm1heEZlZVBlckdhcy50b0hleFN0cmluZygpOwoKICBpZiAoIXdpbmRvdy5rZXBscikgewogICAgLy8gSGFuZGxlIGVycm9yCiAgICByZXR1cm47CiAgfQoKICBjb25zdCBybHBFbmNvZGVkVHggPSBhd2FpdCB3aW5kb3cua2VwbHIuc2lnbkV0aGVyZXVtKAogICAgY2hhaW5JZCwKICAgIHNpZ25lckFkZHJlc3NCZWNoMzIsCiAgICBKU09OLnN0cmluZ2lmeShldGhTZW5kVHgpLAogICAgJ3RyYW5zYWN0aW9uJwogICk7CiAgCiAgY29uc3QgcmVzID0gYXdhaXQgcHJvdmlkZXIuc2VuZFRyYW5zYWN0aW9uKHJscEVuY29kZWRUeCk7CiAgY29uc29sZS5sb2cocmVzKTsKICAKICAvLyBSZXN1bHQ6CiAgLy8gewogIC8vICAgY2hhaW5JZDogMTMzNywKICAvLyAgIGNvbmZpcm1hdGlvbnM6IDAsCiAgLy8gICBkYXRhOiAnMHgnLAogIC8vICAgZnJvbTogJzB4ODU3NzE4MUYzRDhBMzhhNTMyRWY4RjNENkZkOWEzMWJhRTczYjFFQScsCiAgLy8gICBnYXNMaW1pdDogeyBCaWdOdW1iZXI6ICZxdW90OzIxMDAwJnF1b3Q7IH0sCiAgLy8gICBnYXNQcmljZTogeyBCaWdOdW1iZXI6ICZxdW90OzEmcXVvdDsgfSwKICAvLyAgIGhhc2g6ICcweDIwMDgxOGE1MzMxMTNjMDAwNTdjZWNjZDMyNzcyNDk4NzFjNGExYWMwOTUxNDIxNGYwM2MzYjk2MDk5YjZjOTInLAogIC8vICAgbm9uY2U6IDQsCiAgLy8gICByOiAnMHgxNzI3YmQwNzA4MGE1ZDM1ODY0MjJlZGFkODY4MDU5MThlOTc3MmFkZGEyMzFkNTFjMzI4NzBhMWYxY2FiZmZiJywKICAvLyAgIHM6ICcweDdhZmM2YmU1MjhiZWZiNzliOWVkMjUwMzU2ZjZlYWNkNjNlODUzNjg1MDkxZTlhMzk4N2EzZDI2NmM2Y2IyNmEnLAogIC8vICAgdG86ICcweDU1NTU3NjM2MTNhMTJEOEYzZTczYmU4MzFERmY4NTk4MDg5ZDNkQ2EnLAogIC8vICAgdHlwZTogbnVsbCwKICAvLyAgIHY6IDI3MDksCiAgLy8gICB2YWx1ZTogeyBCaWdOdW1iZXI6ICZxdW90OzMxNDE1OTAwMDAwMDAwMDAwMDAmcXVvdDsgfSwKICAvLyAgIHdhaXQ6IFtGdW5jdGlvbl0KICAvLyB9Cn0K"}}),e._v(" "),t("h3",{attrs:{id:"connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connections"}},[e._v("#")]),e._v(" Connections")]),e._v(" "),t("p",[e._v("For Ethereum RPC, Planq gRPC, and/or REST queries, dApp developers should implement providers client-side, and store RPC details in the environment variable as secrets.")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);