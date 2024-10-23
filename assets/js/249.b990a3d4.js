(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{752:function(g,t,C){"use strict";C.r(t);var I=C(1),A=Object(I.a)({},(function(){var g=this,t=g._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[t("h1",{attrs:{id:"multisig"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multisig"}},[g._v("#")]),g._v(" Multisig")]),g._v(" "),t("p",{attrs:{synopsis:""}},[g._v("Learn how to generate, sign and broadcast a transaction using the keyring multisig")]),g._v(" "),t("p",[g._v("A "),t("strong",[g._v("multisig account")]),g._v(" is an Planq account with a special key that can require more than one signature to sign transactions. This can be useful for increasing the security of the account or for requiring the consent of multiple parties to make transactions. Multisig accounts can be created by specifying:")]),g._v(" "),t("ul",[t("li",[g._v("threshold number of signatures required")]),g._v(" "),t("li",[g._v("the public keys involved in signing")])]),g._v(" "),t("p",[g._v("To sign with a multisig account, the transaction must be signed individually by the different keys specified for the account. Then, the signatures will be combined into a multisignature which can be used to sign the transaction. If fewer than the threshold number of signatures needed are present, the resultant multisignature is considered invalid.")]),g._v(" "),t("h2",{attrs:{id:"generate-a-multisig-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate-a-multisig-key"}},[g._v("#")]),g._v(" Generate a Multisig key")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgYWRkIC0tbXVsdGlzaWc9bmFtZTEsbmFtZTIsbmFtZTNbLi4uXSAtLW11bHRpc2lnLXRocmVzaG9sZD1LIG5ld19rZXlfbmFtZQo="}}),g._v(" "),t("p",[t("code",[g._v("K")]),g._v(" is the minimum number of private keys that must have signed the transactions that carry the public key's address as signer.")]),g._v(" "),t("p",[g._v("The "),t("code",[g._v("--multisig")]),g._v(" flag must contain the name of public keys that will be combined into a public key that will be generated and stored as "),t("code",[g._v("new_key_name")]),g._v(" in the local database. All names supplied through "),t("code",[g._v("--multisig")]),g._v(" must already exist in the local database.")]),g._v(" "),t("p",[g._v("Unless the flag "),t("code",[g._v("--nosort")]),g._v(" is set, the order in which the keys are supplied on the command line does not matter, i.e. the following commands generate two identical keys:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgYWRkIC0tbXVsdGlzaWc9cDEscDIscDMgLS1tdWx0aXNpZy10aHJlc2hvbGQ9MiBtdWx0aXNpZ19hZGRyZXNzCnBsYW5xZCBrZXlzIGFkZCAtLW11bHRpc2lnPXAyLHAzLHAxIC0tbXVsdGlzaWctdGhyZXNob2xkPTIgbXVsdGlzaWdfYWRkcmVzcwo="}}),g._v(" "),t("p",[g._v("Multisig addresses can also be generated on-the-fly and printed through the which command:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIGtleXMgc2hvdyAtLW11bHRpc2lnLXRocmVzaG9sZD1LIG5hbWUxIG5hbWUyIG5hbWUzIFsuLi5dCg=="}}),g._v(" "),t("h2",{attrs:{id:"signing-a-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing-a-transaction"}},[g._v("#")]),g._v(" Signing a transaction")]),g._v(" "),t("h3",{attrs:{id:"step-1-create-the-multisig-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-the-multisig-key"}},[g._v("#")]),g._v(" Step 1: Create the multisig key")]),g._v(" "),t("p",[g._v("Let's assume that you have "),t("code",[g._v("test1")]),g._v(" and "),t("code",[g._v("test2")]),g._v(" want to make a multisig account with "),t("code",[g._v("test3")]),g._v(".")]),g._v(" "),t("p",[g._v("First import the public keys of "),t("code",[g._v("test3")]),g._v(" into your keyring.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGxhbnFkIGtleXMgYWRkIFwKICAgIHRlc3QzIFwKICAgIC0tcHVia2V5PXBscXB1YjFhZGR3bnBlcHFnY3hhem1xNndndDJqNHJkZnVtc2Z3bGEwemZrOGU1c3dzM3Azemc1ZGttOTAwN2htZnlzeGFzMHUyCg=="}}),g._v(" "),t("p",[g._v("Generate the multisig key with 2/3 threshold.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGxhbnFkIGtleXMgYWRkIFwKICAgIG11bHRpIFwKICAgIC0tbXVsdGlzaWc9dGVzdDEsdGVzdDIsdGVzdDMgXAogICAgLS1tdWx0aXNpZy10aHJlc2hvbGQ9Mgo="}}),g._v(" "),t("p",[g._v("You can see its address and details:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGxhbnFkIGtleXMgc2hvdyBtdWx0aQoKLSBuYW1lOiBtdWx0aQogIHR5cGU6IG11bHRpCiAgYWRkcmVzczogcGxxMWUwZngwcTltZWF3cmNxN2ZtbWE5eDYwZ2szNWxwcjR4azM4ODRtCiAgcHVia2V5OiBwbHFwdWIxeXRxbDBjc2dxZ2Z6ZDY2NmF4cmp6cTNteHc1OXlzNnlxY2QzeWRqdmhnczB1enM2a2RrNWZwNHQ3M2dta2w4dDZ5MDJ5ZnE3dHZmemQ2NjZheHJqenEzc2Q2OWtwNXVzazQ5Mng2bmVocWphbDY3eW52MG5mcWFwenJ6eTNnbWRrMjdsYTBramZxZnpkNjY2YXhyanpxNnV0cXQ2MzlrYTJqM3hrbmNnazY1ZHVwMDZ0Mjk3Y2Nsam14aHZodTNybWs5MnUzYWZqdXl6OWRnOQogIG1uZW1vbmljOiAmcXVvdDsmcXVvdDsKICB0aHJlc2hvbGQ6IDAKICBwdWJrZXlzOiBbXQo="}}),g._v(" "),t("p",[g._v("Let's add 10 PLANQ to the multisig wallet:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIHR4IGJhbmsgc2VuZCBcCiAgICB0ZXN0MSBcCiAgICBwbHExZTBmeDBxOW1lYXdyY3E3Zm1tYTl4NjBnazM1bHByNHhrMzg4NG0gXAogICAgMTAwMDAwMDAwMDAwMDAwMDAwMDBhcGxhbnEgXAogICAgLS1jaGFpbi1pZD1wbGFucV83MDAwLTEgXAogICAgLS1nYXM9YXV0byBcCiAgICAtLWZlZXM9MTAwMDAwMGFwbGFucSBcCiAgICAtLWJyb2FkY2FzdC1tb2RlPWJsb2NrCg=="}}),g._v(" "),t("h3",{attrs:{id:"step-2-create-the-multisig-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-multisig-transaction"}},[g._v("#")]),g._v(" Step 2: Create the multisig transaction")]),g._v(" "),t("p",[g._v("We want to send 5 PLANQ from our multisig account to "),t("code",[g._v("plq1rgjxswhuxhcrhmyxlval0qa70vxwvqn2e0srft")]),g._v(".")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cGxhbnFkIHR4IGJhbmsgc2VuZCBcCiAgICBwbHExcmdqeHN3aHV4aGNyaG15eGx2YWwwcWE3MHZ4d3ZxbjJlMHNyZnQgXAogICAgcGxxMTU3ZzZybjZ0Nms1cmwwZGw1N3poYTJ3eDcydDYzM2F4cXl2dndxIFwKICAgIDUwMDAwMDAwMDAwMDAwMDAwMDBhcGxhbnEgXAogICAgLS1nYXM9MjAwMDAwIFwKICAgIC0tZmVlcz0xMDAwMDAwYXBsYW5xIFwKICAgIC0tY2hhaW4taWQ9cGxhbnFfNzAwMC0xIFwKICAgIC0tZ2VuZXJhdGUtb25seSAmZ3Q7IHVuc2lnbmVkVHguanNvbgo="}}),g._v(" "),t("p",[g._v("The file "),t("code",[g._v("unsignedTx.json")]),g._v(" contains the unsigned transaction encoded in JSON.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JvZHkmcXVvdDs6IHsKICAgICZxdW90O21lc3NhZ2VzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAmcXVvdDtmcm9tX2FkZHJlc3MmcXVvdDs6ICZxdW90O3BscTFyZ2p4c3dodXhoY3JobXl4bHZhbDBxYTcwdnh3dnFuMmUwc3JmdCZxdW90OywKICAgICAgICAmcXVvdDt0b19hZGRyZXNzJnF1b3Q7OiAmcXVvdDtwbHExNTdnNnJuNnQ2azVybDBkbDU3emhhMnd4NzJ0NjMzYXhxeXZ2d3EmcXVvdDssCiAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDthcGxhbnEmcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7NTAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICAgICAgfQogICAgICAgIF0KICAgICAgfQogICAgXSwKICAgICZxdW90O21lbW8mcXVvdDs6ICZxdW90OyZxdW90OywKICAgICZxdW90O3RpbWVvdXRfaGVpZ2h0JnF1b3Q7OiAmcXVvdDswJnF1b3Q7LAogICAgJnF1b3Q7ZXh0ZW5zaW9uX29wdGlvbnMmcXVvdDs6IFtdLAogICAgJnF1b3Q7bm9uX2NyaXRpY2FsX2V4dGVuc2lvbl9vcHRpb25zJnF1b3Q7OiBbXQogIH0sCiAgJnF1b3Q7YXV0aF9pbmZvJnF1b3Q7OiB7CiAgICAmcXVvdDtzaWduZXJfaW5mb3MmcXVvdDs6IFtdLAogICAgJnF1b3Q7ZmVlJnF1b3Q7OiB7CiAgICAgICZxdW90O2Ftb3VudCZxdW90OzogWwogICAgICAgIHsKICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDthcGxhbnEmcXVvdDssCiAgICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6ICZxdW90OzEwMDAwMDAmcXVvdDsKICAgICAgICB9CiAgICAgIF0sCiAgICAgICZxdW90O2dhc19saW1pdCZxdW90OzogJnF1b3Q7MjAwMDAwJnF1b3Q7LAogICAgICAmcXVvdDtwYXllciZxdW90OzogJnF1b3Q7JnF1b3Q7LAogICAgICAmcXVvdDtncmFudGVyJnF1b3Q7OiAmcXVvdDsmcXVvdDsKICAgIH0KICB9LAogICZxdW90O3NpZ25hdHVyZXMmcXVvdDs6IFtdCn0K"}}),g._v(" "),t("h3",{attrs:{id:"step-3-sign-individually"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-sign-individually"}},[g._v("#")]),g._v(" Step 3: Sign individually")]),g._v(" "),t("p",[g._v("Sign with "),t("code",[g._v("test1")]),g._v(" and "),t("code",[g._v("test2")]),g._v(" and create individual signatures.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGxhbnFkIHR4IHNpZ24gXAogICAgdW5zaWduZWRUeC5qc29uIFwKICAgIC0tbXVsdGlzaWc9cGxxMWUwZngwcTltZWF3cmNxN2ZtbWE5eDYwZ2szNWxwcjR4azM4ODRtIFwKICAgIC0tZnJvbT10ZXN0MSBcCiAgICAtLW91dHB1dC1kb2N1bWVudD10ZXN0MXNpZy5qc29uIFwKICAgIC0tY2hhaW4taWQ9cGxhbnFfNzAwMC0xCg=="}}),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGxhbnFkIHR4IHNpZ24gXAogICAgdW5zaWduZWRUeC5qc29uIFwKICAgIC0tbXVsdGlzaWc9cGxxMWUwZngwcTltZWF3cmNxN2ZtbWE5eDYwZ2szNWxwcjR4azM4ODRtIFwKICAgIC0tZnJvbT10ZXN0MiBcCiAgICAtLW91dHB1dC1kb2N1bWVudD10ZXN0MnNpZy5qc29uIFwKICAgIC0tY2hhaW4taWQ9cGxhbnFfNzAwMC0xCg=="}}),g._v(" "),t("h3",{attrs:{id:"step-4-create-multisignature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-4-create-multisignature"}},[g._v("#")]),g._v(" Step 4: Create multisignature")]),g._v(" "),t("p",[g._v("Combine signatures to sign transaction.")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGxhbnFkIHR4IG11bHRpc2lnbiBcCiAgICB1bnNpZ25lZFR4Lmpzb24gXAogICAgbXVsdGkgXAogICAgdGVzdDFzaWcuanNvbiB0ZXN0MnNpZy5qc29uIFwKICAgIC0tb3V0cHV0LWRvY3VtZW50PXNpZ25lZFR4Lmpzb24gXAogICAgLS1jaGFpbi1pZD1wbGFucV83MDAwLTEK"}}),g._v(" "),t("p",[g._v("The TX is now signed:")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2JvZHkmcXVvdDs6IHsKICAgICZxdW90O21lc3NhZ2VzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5iYW5rLnYxYmV0YTEuTXNnU2VuZCZxdW90OywKICAgICAgICAmcXVvdDtmcm9tX2FkZHJlc3MmcXVvdDs6ICZxdW90O3BscTFyZ2p4c3dodXhoY3JobXl4bHZhbDBxYTcwdnh3dnFuMmUwc3JmdCZxdW90OywKICAgICAgICAmcXVvdDt0b19hZGRyZXNzJnF1b3Q7OiAmcXVvdDtwbHExNTdnNnJuNnQ2azVybDBkbDU3emhhMnd4NzJ0NjMzYXhxeXZ2d3EmcXVvdDssCiAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2Rlbm9tJnF1b3Q7OiAmcXVvdDthcGxhbnEmcXVvdDssCiAgICAgICAgICAgICZxdW90O2Ftb3VudCZxdW90OzogJnF1b3Q7NTAwMDAwMDAwMDAwMDAwMDAwMCZxdW90OwogICAgICAgICAgfQogICAgICAgIF0KICAgICAgfQogICAgXSwKICAgICZxdW90O21lbW8mcXVvdDs6ICZxdW90OyZxdW90OywKICAgICZxdW90O3RpbWVvdXRfaGVpZ2h0JnF1b3Q7OiAmcXVvdDswJnF1b3Q7LAogICAgJnF1b3Q7ZXh0ZW5zaW9uX29wdGlvbnMmcXVvdDs6IFtdLAogICAgJnF1b3Q7bm9uX2NyaXRpY2FsX2V4dGVuc2lvbl9vcHRpb25zJnF1b3Q7OiBbXQogIH0sCiAgJnF1b3Q7YXV0aF9pbmZvJnF1b3Q7OiB7CiAgICAmcXVvdDtzaWduZXJfaW5mb3MmcXVvdDs6IFsKICAgICAgewogICAgICAgICZxdW90O3B1YmxpY19rZXkmcXVvdDs6IHsKICAgICAgICAgICZxdW90O0B0eXBlJnF1b3Q7OiAmcXVvdDsvY29zbW9zLmNyeXB0by5tdWx0aXNpZy5MZWdhY3lBbWlub1B1YktleSZxdW90OywKICAgICAgICAgICZxdW90O3RocmVzaG9sZCZxdW90OzogMiwKICAgICAgICAgICZxdW90O3B1YmxpY19rZXlzJnF1b3Q7OiBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleSZxdW90OywKICAgICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0FwQ3pTRzhrN1RyNGFNNmU0T0pSRXhON2NOdHZIMjFMOWF6YmgrdVJydnQ0JnF1b3Q7CiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleSZxdW90OywKICAgICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0FoOTFlcno4Q2hOYW5xTGU5ZWE5NDhydkFpWE1DUmxSNUthN0VFL2MweFVLJnF1b3Q7CiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAmcXVvdDtAdHlwZSZxdW90OzogJnF1b3Q7L2Nvc21vcy5jcnlwdG8uc2VjcDI1NmsxLlB1YktleSZxdW90OywKICAgICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O0EwT2p0SVVDRkpNM0FvYko5SEpUV0tQOVJaVjIrV1Bjd1ZqTGdzQWlkclovJnF1b3Q7CiAgICAgICAgICAgIH0KICAgICAgICAgIF0KICAgICAgICB9LAogICAgICAgICZxdW90O21vZGVfaW5mbyZxdW90OzogewogICAgICAgICAgJnF1b3Q7bXVsdGkmcXVvdDs6IHsKICAgICAgICAgICAgJnF1b3Q7Yml0YXJyYXkmcXVvdDs6IHsKICAgICAgICAgICAgICAmcXVvdDtleHRyYV9iaXRzX3N0b3JlZCZxdW90OzogMywKICAgICAgICAgICAgICAmcXVvdDtlbGVtcyZxdW90OzogJnF1b3Q7d0E9PSZxdW90OwogICAgICAgICAgICB9LAogICAgICAgICAgICAmcXVvdDttb2RlX2luZm9zJnF1b3Q7OiBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgJnF1b3Q7c2luZ2xlJnF1b3Q7OiB7CiAgICAgICAgICAgICAgICAgICZxdW90O21vZGUmcXVvdDs6ICZxdW90O1NJR05fTU9ERV9MRUdBQ1lfQU1JTk9fSlNPTiZxdW90OwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgJnF1b3Q7c2luZ2xlJnF1b3Q7OiB7CiAgICAgICAgICAgICAgICAgICZxdW90O21vZGUmcXVvdDs6ICZxdW90O1NJR05fTU9ERV9MRUdBQ1lfQU1JTk9fSlNPTiZxdW90OwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIH0KICAgICAgICAgICAgXQogICAgICAgICAgfQogICAgICAgIH0sCiAgICAgICAgJnF1b3Q7c2VxdWVuY2UmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgICAgfQogICAgXSwKICAgICZxdW90O2ZlZSZxdW90OzogewogICAgICAmcXVvdDthbW91bnQmcXVvdDs6IFsKICAgICAgICB7CiAgICAgICAgICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7YXBsYW5xJnF1b3Q7LAogICAgICAgICAgJnF1b3Q7YW1vdW50JnF1b3Q7OiAmcXVvdDsxMDAwMDAwJnF1b3Q7CiAgICAgICAgfQogICAgICBdLAogICAgICAmcXVvdDtnYXNfbGltaXQmcXVvdDs6ICZxdW90OzIwMDAwMCZxdW90OywKICAgICAgJnF1b3Q7cGF5ZXImcXVvdDs6ICZxdW90OyZxdW90OywKICAgICAgJnF1b3Q7Z3JhbnRlciZxdW90OzogJnF1b3Q7JnF1b3Q7CiAgICB9CiAgfSwKICAmcXVvdDtzaWduYXR1cmVzJnF1b3Q7OiBbCiAgICAmcXVvdDtDa0NFZUliZUdjK0kxaXBadWhwLzBLaFZObldBdjJ0VGx2Z281eDYxbHprMUtIbUxQVjM4bS9ZRnVyckZ0NWNtNStmcUlYcm4rRmxPanJKdXpCaHc4b2dZQ2tDYXdtOW1wWHNCSGswQ0ZzRTU2MThmVm52U2NFa2ZyelcwYzJqQ2NqcVY4RVB1ajN1dDc0VVd6WnlRa3d0Skd4VVd0cm85RWduR3NCN0RpMUd6aXpzdCZxdW90OwogIF0KfQo="}}),g._v(" "),t("h3",{attrs:{id:"step-5-broadcast-transaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-5-broadcast-transaction"}},[g._v("#")]),g._v(" Step 5: Broadcast transaction")]),g._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"cGxhbnFkIHR4IGJyb2FkY2FzdCBzaWduZWRUeC5qc29uIFwKICAgIC0tY2hhaW4taWQ9cGxhbnFfNzAwMC0xIFwKICAgIC0tYnJvYWRjYXN0LW1vZGU9YmxvY2sK"}})],1)}),[],!1,null,null,null);t.default=A.exports}}]);