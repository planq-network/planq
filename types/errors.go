package types

import (
	sdkerrors "cosmossdk.io/errors"
)

// RootCodespace is the codespace for all errors defined in this package
const RootCodespace = "planq"

// root error codes for Planq
const (
	codeKeyTypeNotSupported = iota + 2
)

// errors
var (
	ErrKeyTypeNotSupported = sdkerrors.Register(RootCodespace, codeKeyTypeNotSupported, "key type 'secp256k1' not supported")
	ErrInvalidChainID      = sdkerrors.Register(RootCodespace, 3, "invalid chain ID")
)
