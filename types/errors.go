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

	// ErrMarshalBigInt returns an error resulting from marshaling a big.Int to a string.
	ErrMarshalBigInt = sdkerrors.Register(RootCodespace, 5, "cannot marshal big.Int to string")

	// ErrInvalidValue returns an error resulting from an invalid value.
	ErrInvalidValue = sdkerrors.Register(RootCodespace, 4, "invalid value")

	// ErrUnmarshalBigInt returns an error resulting from unmarshaling a big.Int from a string.
	ErrUnmarshalBigInt = sdkerrors.Register(RootCodespace, 6, "cannot unmarshal big.Int from string")
)
