module.exports = {
  theme: "cosmos",
  title: "Planq Documentation",
  locales: {
    "/": {
      lang: "en-US",
    },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-katex"));
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
  ],
  base: process.env.VUEPRESS_BASE || "/",
  plugins: [
    ["vuepress-plugin-element-tabs"],
    [
      "@vuepress/google-analytics",
      {
        ga: process.env.GOOGLE_ANALYTICS_ID || '',
      },
    ],
  ],
  head: [
    // ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["meta", { name: "msapplication-TileColor", content: "#2e3148" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    // ['link', { rel: "apple-touch-icon-precomposed", href: "/apple-touch-icon-precomposed.png" }],
  ],
  themeConfig: {
    repo: "planq-network/planq",
    docsRepo: "planq-network/planq",
    docsBranch: "main",
    docsDir: "docs",
    editLinks: true,
    custom: true,
    project: {
      name: "Planq",
      denom: "Planq",
      ticker: "PLANQ",
      binary: "planqd",
      testnet_denom: "tPlanq",
      testnet_ticker: "tPLANQ",
      rpc_url: "https://evm-rpc.planq.network",
      rpc_url_testnet: "https://evm-rpc.planq.network",
      rpc_url_local: "http://localhost:8545/",
      chain_id: "7070",
      testnet_chain_id: "7000",
      latest_version: "v1.0.1",
      mainnet_version: "v1.0.1",
      testnet_version: "v1.0.0",
      version_number: "2",
      testnet_version_number: "1",
      testnet_evm_explorer_url: "https://evm.planq.network",
      evm_explorer_url: "https://evm.planq.network",
      testnet_cosmos_explorer_url: "https://explorer.planq.network",
      cosmos_explorer_url: "https://explorer.planq.network",
    },
    logo: {
      src: "/planq-logo.svg",
    },
    algolia: {
      id: process.env.ALGOLIA_ID || '',
      key: process.env.ALGOLIA_KEY || '',
      index: "planq",
    },
    topbar: {
      banner: false,
    },
    sidebar: {
      auto: false,
      nav: [
        {
          title: "About Planq",
          children: [
            {
              title: "Introduction",
              directory: true,
              path: "/about/intro",
            },
            {
              title: "Airdrop",
              directory: false,
              path: "/about/airdrop",
            },
            {
              title: "Planq Ecosystem",
              path: "https://planq.network/ecosystem",
            },
          ],
        },
        {
          title: "For Users",
          children: [
            {
              title: "Basic Concepts",
              directory: true,
              path: "/users/basics",
            },
            {
              title: "Digital Wallets",
              directory: true,
              path: "/users/wallets",
            },
            {
              title: "Account Keys",
              directory: true,
              path: "/users/keys",
            },
            {
              title: "Planq Governance",
              directory: true,
              path: "/users/governance",
            },
            {
              title: "Technical Concepts",
              directory: true,
              path: "/users/technical_concepts",
            },
          ],
        },
        {
          title: "For dApp Devs",
          children: [
            {
              title: "Overview",
              directory: false,
              path: "/developers/overview",
            },
            {
              title: "Quick Connect",
              directory: false,
              path: "/developers/connect",
            },
            {
              title: "Clients",
              directory: false,
              path: "/developers/clients",
            },
            {
              title: "Guides",
              directory: true,
              path: "/developers/guides",
            },
            {
              title: "Localnet",
              directory: true,
              path: "/developers/localnet",
            },
            {
              title: "Testnet",
              directory: true,
              path: "/developers/testnet",
            },
            {
              title: "Ethereum Tooling",
              directory: true,
              path: "/developers/tools",
            },
            {
              title: "Client Libraries",
              directory: true,
              path: "/developers/libraries",
            },
            {
              title: "Ethereum JSON-RPC",
              directory: true,
              path: "/developers/json-rpc",
            },
            {
              title: "Cosmos gRPC & REST",
              path: "https://api.planq.network/",
            },
            {
              title: "Tendermint RPC",
              path: "https://docs.tendermint.com/v0.34/rpc/",
            },
          ],
        },
        {
          title: "For Protocol Devs",
          children: [
            {
              title: "Modules",
              directory: true,
              path: "/modules",
            },
            {
              title: "Module Accounts",
              directory: false,
              path: "/protocol/moduleaccounts",
            },
            {
              title: "IBC Channels",
              directory: false,
              path: "/protocol/ibc",
            },
            {
              title: "Planq Go API",
              path: "https://pkg.go.dev/github.com/planq-network/planq",
            },
            {
              title: "Ethermint Library Go API",
              path: "https://pkg.go.dev/github.com/evmos/ethermint",
            },
            {
              title: "Evmos Library Go API",
              path: "https://pkg.go.dev/github.com/evmos/evmos",
            },
          ],
        },
        {
          title: "For Validators",
          children: [
            {
              title: "Validators Overview",
              directory: false,
              path: "/validators/overview",
            },
            {
              title: "Installation & Quick Start",
              directory: true,
              path: "/validators/quickstart",
            },
            {
              title: "Setup & Configuration",
              directory: true,
              path: "/validators/setup",
            },
            {
              title: "Join Testnet",
              directory: false,
              path: "/validators/testnet",
            },
            {
              title: "Join Mainnet",
              directory: false,
              path: "/validators/mainnet",
            },
            {
              title: "Telemetry and Observability",
              directory: false,
              path: "/protocol/telemetry",
            },
            {
              title: "Security",
              directory: true,
              path: "/validators/security",
            },
            {
              title: "Software Upgrade Guide",
              directory: true,
              path: "/validators/upgrades",
            },
            {
              title: "Snapshots & Archive Nodes",
              directory: false,
              path: "/validators/snapshots_archives",
            },
            {
              title: "FAQ",
              directory: false,
              path: "/validators/faq",
            },
          ],
        },
        {
          title: "Block Explorers",
          children: [
            {
              title: "Block Explorers",
              path: "/developers/explorers",
            },
            {
              title: "Blockscout (EVM)",
              path: "https://evm.planq.network",
            },
            {
              title: "Big Dipper (Cosmos)",
              path: "https://explorer.planq.network/",
            },
          ],
        },
      ],
    },
    gutter: {
      title: "Help & Support",
      chat: {
        title: "Discord Channel",
        text: "Chat with Planq users and team on Discord.",
        url: "https://discord.gg/jGTPyYmpsq",
        bg: "linear-gradient(103.75deg, #1B1E36 0%, #22253F 100%)",
      },
      forum: {
        title: "Commonwealth Forum",
        text: "Join the Planq Commonwealth forum",
        url: "https://commonwealth.im/planq",
        bg: "linear-gradient(221.79deg, #3D6B99 -1.08%, #336699 95.88%)",
      },
      github: {
        title: "Found an Issue?",
        text: "Help us improve this page by suggesting edits on GitHub.",
        bg: "#F8F9FC",
      },
    },
    footer: {
      logo: "",
      textLink: {
        text: "planq.network",
        url: "https://planq.network",
      },
      services: [
        {
          service: "github",
          url: "https://github.com/planq-network/planq",
        },
        {
          service: "twitter",
          url: "https://twitter.com/PlanqFoundation",
        },
        {
          service: "reddit",
          url: "https://reddit.com/r/planq_network",
        },
      ],
      smallprint: "This website is maintained by Planq Foundation",
      links: [
        {
          title: "Ecosystem Documentation",
          children: [
            {
              title: "Cosmos SDK Docs",
              url: "https://docs.cosmos.network",
            },
            {
              title: "Ethereum Docs",
              url: "https://ethereum.org/developers",
            },
            {
              title: "Tendermint Core Docs",
              url: "https://docs.tendermint.com",
            },
          ],
        },
        {
          title: "Community",
          children: [
            {
              title: "Planq Discord Community",
              url: "https://discord.gg/jGTPyYmpsq",
            },
            {
              title: "Planq on Reddit",
              url: "https://reddit.com/r/planq_network",
            },
          ],
        },
      ],
    },
    versions: [
      {
        label: "main",
        key: "main",
      },
    ],
  },
};
