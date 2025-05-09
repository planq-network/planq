#!/usr/bin/env bash

set -eo pipefail

# need to install statik on the docker image
go install github.com/rakyll/statik

# create temporary folder to store intermediate results from `buf build` + `buf generate`
mkdir -p ./tmp-swagger-gen

# create swagger files on an individual basis  w/ `buf build` and `buf generate` (needed for `swagger-combine`)
proto_dirs=$(find ./proto ./third_party/proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for dir in $proto_dirs; do
  # generate swagger files (filter query files)
  query_file=$(find "${dir}" -maxdepth 1 \( -name 'query.proto' -o -name 'service.proto' \))
  if [[ -n "$query_file" ]]; then
    buf generate --template proto/buf.gen.swagger.yaml "$query_file"
  fi
done

# combine swagger files
# uses nodejs package `swagger-combine`.
# all the individual swagger files need to be configured in `config.json` for merging
swagger-combine ./client/docs/config.json -o ./client/docs/swagger-ui/swagger.yaml -f yaml --continueOnConflictingPaths true --includeDefinitions true

# clean swagger files
rm -rf ./tmp-swagger-gen

# generate binary for static server (use -f flag to replace current binary)
statik -f -src=./client/docs/swagger-ui -dest=./client/docs