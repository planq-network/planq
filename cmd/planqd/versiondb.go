//go:build rocksdb
// +build rocksdb

package main

import (
	"sort"

	"github.com/linxGnu/grocksdb"
	"github.com/planq-network/planq/v2/app"
	"github.com/planq-network/planq/v2/cmd/planqd/opendb"
	versiondbclient "github.com/planq-network/planq/v2/versiondb/client"
	"github.com/spf13/cobra"
)

func ChangeSetCmd() *cobra.Command {
	keys, _, _ := app.StoreKeys()
	storeNames := make([]string, 0, len(keys))
	for name := range keys {
		storeNames = append(storeNames, name)
	}
	sort.Strings(storeNames)

	return versiondbclient.ChangeSetGroupCmd(versiondbclient.Options{
		DefaultStores:  storeNames,
		OpenReadOnlyDB: opendb.OpenReadOnlyDB,
		AppRocksDBOptions: func(sstFileWriter bool) *grocksdb.Options {
			return opendb.NewRocksdbOptions(nil, sstFileWriter)
		},
	})
}
