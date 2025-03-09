#!/bin/bash
set -e

apt-get install -y libsnappy-dev
apt-get install -y zlib1g-dev
apt-get install -y libbz2-dev
export CGO_CFLAGS="-I/opt/rocksdb/include"
export CGO_LDFLAGS="-L/opt/rocksdb -lrocksdb -lstdc++ -lm -lz -lbz2 -lsnappy"