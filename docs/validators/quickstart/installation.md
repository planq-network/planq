<!--
order: 1
-->

# Installation

Build and install the Planq binaries from source or using Docker. {synopsis}

## Pre-requisites

- [Install Go 1.19+](https://golang.org/dl/) {prereq}
- [Install jq](https://stedolan.github.io/jq/download/) {prereq}

## Install Go

::: warning
Planq is built using [Go](https://golang.org/dl/) version `1.19+`
:::

```bash
go version
```

:::tip
If the `planqd: command not found` error message is returned, confirm that your [`GOPATH`](https://golang.org/doc/gopath_code#GOPATH) is correctly configured by running the following command:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```

:::

## Install Binaries

::: tip
The latest {{ $themeConfig.project.name }} [version](https://github.com/planq-network/planq/releases) is `{{ $themeConfig.project.binary }} {{ $themeConfig.project.latest_version }}`
:::

### GitHub

Clone and build {{ $themeConfig.project.name }} using `git`:

```bash
git clone https://github.com/planq-network/planq.git
cd planq
git fetch
git checkout <tag>
make install
```

`<tag>` refers to a released tag from the tags [page](https://github.com/planq-network/planq/tags).

After installation is done, check that the `{{ $themeConfig.project.binary }}` binaries have been successfully installed:

```bash
planqd version
```

### Docker

You can build {{ $themeConfig.project.name }} using Docker by running:

```bash
make build-docker
```

The command above will create a docker container: `planq-network/planq:latest`. Now you can run `planqd` in the container.

```bash
docker run -it -p 26657:26657 -p 26656:26656 -v ~/.planqd/:/root/.planqd planq-network/planq:latest planqd version

# To initialize
# docker run -it -p 26657:26657 -p 26656:26656 -v ~/.planqd/:/root/.planqd planq-network/planq:latest planqd init test-chain --chain-id test_7000-1

# To run
# docker run -it -p 26657:26657 -p 26656:26656 -v ~/.planqd/:/root/.planqd planq-network/planq:latest planqd start
```
