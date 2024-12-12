package ethed25519

import (
	"bytes"
	"crypto/hmac"
	"crypto/sha512"
	"encoding/binary"
	"errors"
	"filippo.io/edwards25519"

	"fmt"
	"github.com/btcsuite/btcd/btcec/v2"
	"github.com/btcsuite/btcd/btcutil"
	"github.com/btcsuite/btcd/chaincfg"
	"math/big"
)

const (
	// RecommendedSeedLen is the recommended length in bytes for a seed
	// to a master node.
	RecommendedSeedLen        = 32 // 256 bits
	PublicKeyCompressedLength = 33
	// HardenedKeyStart is the index at which a hardened key starts.  Each
	// extended key has 2^31 normal child keys and 2^31 hardened child keys.
	// Thus the range for normal child keys is [0, 2^31 - 1] and the range
	// for hardened child keys is [2^31, 2^32 - 1].
	HardenedKeyStart = 0x80000000 // 2^31

	// MinSeedBytes is the minimum number of bytes allowed for a seed to
	// a master node.
	MinSeedBytes = 16 // 128 bits

	// MaxSeedBytes is the maximum number of bytes allowed for a seed to
	// a master node.
	MaxSeedBytes = 64 // 512 bits

	// serializedKeyLen is the length of a serialized public or private
	// extended key.  It consists of 4 bytes version, 1 byte depth, 4 bytes
	// fingerprint, 4 bytes child number, 32 bytes chain code, and 33 bytes
	// public/private key data.
	serializedKeyLen = 4 + 1 + 4 + 4 + 32 + 33 // 78 bytes

	// maxUint8 is the max positive integer which can be serialized in a uint8
	maxUint8 = 1<<8 - 1
)

var (
	// ErrDeriveHardFromPublic describes an error in which the caller
	// attempted to derive a hardened extended key from a public key.
	ErrDeriveHardFromPublic = errors.New("cannot derive a hardened key " +
		"from a public key")

	// ErrDeriveBeyondMaxDepth describes an error in which the caller
	// has attempted to derive more than 255 keys from a root key.
	ErrDeriveBeyondMaxDepth = errors.New("cannot derive a key with more than " +
		"255 indices in its path")

	// ErrNotPrivExtKey describes an error in which the caller attempted
	// to extract a private key from a public extended key.
	ErrNotPrivExtKey = errors.New("unable to create private keys from a " +
		"public extended key")

	// ErrInvalidChild describes an error in which the child at a specific
	// index is invalid due to the derived key falling outside of the valid
	// range for secp256k1 private keys.  This error indicates the caller
	// should simply ignore the invalid child extended key at this index and
	// increment to the next index.
	ErrInvalidChild = errors.New("the extended key at this index is invalid")

	// ErrUnusableSeed describes an error in which the provided seed is not
	// usable due to the derived key falling outside of the valid range for
	// secp256k1 private keys.  This error indicates the caller must choose
	// another seed.
	ErrUnusableSeed = errors.New("unusable seed")

	// ErrInvalidSeedLen describes an error in which the provided seed or
	// seed length is not in the allowed range.
	ErrInvalidSeedLen = fmt.Errorf("seed length must be between %d and %d "+
		"bits", MinSeedBytes*8, MaxSeedBytes*8)

	// ErrBadChecksum describes an error in which the checksum encoded with
	// a serialized extended key does not match the calculated value.
	ErrBadChecksum = errors.New("bad extended key checksum")

	// ErrInvalidKeyLen describes an error in which the provided serialized
	// key is not the expected length.
	ErrInvalidKeyLen = errors.New("the provided serialized extended key " +
		"length is invalid")
)

type ExtendedKey struct {
	key       []byte // This will be the pubkey for extended pub keys
	pubKey    []byte // This will only be set for extended priv keys
	chainCode []byte
	depth     uint8
	parentFP  []byte
	childNum  uint32
	version   []byte
	isPrivate bool
}

// NewExtendedKey returns a new instance of an extended key with the given
// fields.  No error checking is performed here as it's only intended to be a
// convenience method used to create a populated struct. This function should
// only be used by applications that need to create custom ExtendedKeys. All
// other applications should just use NewMaster, Derive, or Neuter.
func NewExtendedKey(version, key, chainCode, parentFP []byte, depth uint8,
	childNum uint32, isPrivate bool) *ExtendedKey {

	// NOTE: The pubKey field is intentionally left nil so it is only
	// computed and memoized as required.
	return &ExtendedKey{
		key:       key,
		chainCode: chainCode,
		depth:     depth,
		parentFP:  parentFP,
		childNum:  childNum,
		version:   version,
		isPrivate: isPrivate,
	}
}

func NewMaster(seed []byte, net *chaincfg.Params) (*ExtendedKey, error) {
	// Per [BIP32], the seed must be in range [MinSeedBytes, MaxSeedBytes].
	if len(seed) < MinSeedBytes || len(seed) > MaxSeedBytes {
		return nil, ErrInvalidSeedLen
	}

	// First take the HMAC-SHA512 of the master key and the seed data:
	//   I = HMAC-SHA512(Key = "Bitcoin seed", Data = S)
	hmac512 := hmac.New(sha512.New, []byte("ed25519 seed"))
	_, _ = hmac512.Write(seed)
	lr := hmac512.Sum(nil)

	// Split "I" into two 32-byte sequences Il and Ir where:
	//   Il = master secret key
	//   Ir = master chain code
	secretKey := lr[:len(lr)/2]
	chainCode := lr[len(lr)/2:]

	parentFP := []byte{0x00, 0x00, 0x00, 0x00}
	return NewExtendedKey(net.HDPrivateKeyID[:], secretKey, chainCode,
		parentFP, 0, 0, true), nil
}

// pubKeyBytes returns bytes for the serialized compressed public key associated
// with this extended key in an efficient manner including memoization as
// necessary.
//
// When the extended key is already a public key, the key is simply returned as
// is since it's already in the correct form.  However, when the extended key is
// a private key, the public key will be calculated and memoized so future
// accesses can simply return the cached result.
func (k *ExtendedKey) pubKeyBytes() []byte {
	// Just return the key if it's already an extended public key.
	if !k.isPrivate {
		return k.key
	}

	// This is a private extended key, so calculate and memoize the public
	// key if needed.
	if len(k.pubKey) == 0 {
		pubKey, err := k.EDPubKey()

		if err != nil {
			// This should never happen since the key is already known to
			// be valid since it was generated by this package.
			panic(fmt.Sprintf("failed to convert private key to public key: %v", err))
		}
		k.pubKey = pubKey.Bytes()
	}

	return k.pubKey
}

func (k *ExtendedKey) Derive(i uint32) (*ExtendedKey, error) {
	// Prevent derivation of children beyond the max allowed depth.
	if k.depth == maxUint8 {
		return nil, ErrDeriveBeyondMaxDepth
	}

	// There are four scenarios that could happen here:
	// 1) Private extended key -> Hardened child private extended key
	// 2) Private extended key -> Non-hardened child private extended key
	// 3) Public extended key -> Non-hardened child public extended key
	// 4) Public extended key -> Hardened child public extended key (INVALID!)

	// Case #4 is invalid, so error out early.
	// A hardened child extended key may not be created from a public
	// extended key.
	isChildHardened := i >= HardenedKeyStart
	if !k.isPrivate && isChildHardened {
		return nil, ErrDeriveHardFromPublic
	}

	// The data used to derive the child key depends on whether or not the
	// child is hardened per [BIP32].
	//
	// For hardened children:
	//   0x00 || ser256(parentKey) || ser32(i)
	//
	// For normal children:
	//   serP(parentPubKey) || ser32(i)
	keyLen := 33
	data := make([]byte, keyLen+4)
	if isChildHardened {
		// Case #1.
		// When the child is a hardened child, the key is known to be a
		// private key due to the above early return.  Pad it with a
		// leading zero as required by [BIP32] for deriving the child.
		// Additionally, right align it if it's shorter than 32 bytes.
		offset := 33 - len(k.key)
		copy(data[offset:], k.key)
	} else {
		// Case #2 or #3.
		// This is either a public or private extended key, but in
		// either case, the data which is used to derive the child key
		// starts with the secp256k1 compressed public key bytes.
		copy(data, k.pubKeyBytes())
	}
	binary.BigEndian.PutUint32(data[keyLen:], i)

	// Take the HMAC-SHA512 of the current key's chain code and the derived
	// data:
	//   I = HMAC-SHA512(Key = chainCode, Data = data)
	hmac512 := hmac.New(sha512.New, k.chainCode)
	_, _ = hmac512.Write(data)
	ilr := hmac512.Sum(nil)

	// Split "I" into two 32-byte sequences Il and Ir where:
	//   Il = intermediate key used to derive the child
	//   Ir = child chain code
	il := ilr[:len(ilr)/2]
	childChainCode := ilr[len(ilr)/2:]

	// Both derived public or private keys rely on treating the left 32-byte
	// sequence calculated above (Il) as a 256-bit integer that must be
	// within the valid range for a secp256k1 private key.  There is a small
	// chance (< 1 in 2^127) this condition will not hold, and in that case,
	// a child extended key can't be created for this index and the caller
	// should simply increment to the next index.
	var ilNum btcec.ModNScalar
	if overflow := ilNum.SetByteSlice(il); overflow {
		return nil, ErrInvalidChild
	}

	// The algorithm used to derive the child key depends on whether or not
	// a private or public child is being derived.
	//
	// For private children:
	//   childKey = parse256(Il) + parentKey
	//
	// For public children:
	//   childKey = serP(point(parse256(Il)) + parentKey)
	var isPrivate bool
	var childKey []byte
	if k.isPrivate {
		// Case #1 or #2.
		// Add the parent private key to the intermediate private key to
		// derive the final child key.
		//
		// childKey = parse256(Il) + parenKey
		var keyNum btcec.ModNScalar
		if overflow := keyNum.SetByteSlice(k.key); overflow {
			return nil, ErrInvalidChild
		}

		childKeyBytes := ilNum.Add(&keyNum).Bytes()
		childKey = childKeyBytes[:]

		// Strip leading zeroes from childKey, to match the expectation
		// as the old big.Int usage in this area of the codebase.
		for len(childKey) > 0 && childKey[0] == 0x00 {
			childKey = childKey[1:]
		}

		isPrivate = true
	} else {
		// Case #3.
		// Calculate the corresponding intermediate public key for thek
		// intermediate private key: ilJ = ilScalar*G
		var (
			ilScalar btcec.ModNScalar
			ilJ      btcec.JacobianPoint
		)
		if overflow := ilScalar.SetByteSlice(il); overflow {
			return nil, ErrInvalidChild
		}
		btcec.ScalarBaseMultNonConst(&ilScalar, &ilJ)

		if (ilJ.X.IsZero() && ilJ.Y.IsZero()) || ilJ.Z.IsZero() {
			return nil, ErrInvalidChild
		}

		// Convert the serialized compressed parent public key into X
		// and Y coordinates so it can be added to the intermediate
		// public key.
		pubKey, err := btcec.ParsePubKey(k.key)
		if err != nil {
			return nil, err
		}

		// Convert the public key to jacobian coordinates, as that's
		// what our main add/double methods use.
		var pubKeyJ btcec.JacobianPoint
		pubKey.AsJacobian(&pubKeyJ)

		// Add the intermediate public key to the parent public key to
		// derive the final child key.
		//
		// childKey = serP(point(parse256(Il)) + parentKey)
		var childKeyPubJ btcec.JacobianPoint
		btcec.AddNonConst(&ilJ, &pubKeyJ, &childKeyPubJ)

		// Convert the new child public key back to affine coordinates
		// so we can serialize it in compressed format.
		childKeyPubJ.ToAffine()
		childKeyPub := btcec.NewPublicKey(
			&childKeyPubJ.X, &childKeyPubJ.Y,
		)

		childKey = childKeyPub.SerializeCompressed()
	}

	// The fingerprint of the parent for the derived child is the first 4
	// bytes of the RIPEMD160(SHA256(parentPubKey)).
	parentFP := btcutil.Hash160(k.pubKeyBytes())[:4]
	return NewExtendedKey(k.version, childKey, childChainCode, parentFP,
		k.depth+1, i, isPrivate), nil
}

// IsPrivate returns whether or not the extended key is a private extended key.
//
// A private extended key can be used to derive both hardened and non-hardened
// child private and public extended keys.  A public extended key can only be
// used to derive non-hardened child public extended keys.
func (k *ExtendedKey) IsPrivate() bool {
	return k.isPrivate
}

// Depth returns the current derivation level with respect to the root.
//
// The root key has depth zero, and the field has a maximum of 255 due to
// how depth is serialized.
func (k *ExtendedKey) Depth() uint8 {
	return k.depth
}

// Version returns the extended key's hardened derivation version. This can be
// used to identify the extended key's type.
func (k *ExtendedKey) Version() []byte {
	return k.version
}

// ParentFingerprint returns a fingerprint of the parent extended key from which
// this one was derived.
func (k *ExtendedKey) ParentFingerprint() uint32 {
	return binary.BigEndian.Uint32(k.parentFP)
}

// ChainCode returns the chain code part of this extended key.
//
// It is identical for both public and private extended keys.
func (k *ExtendedKey) ChainCode() []byte {
	return append([]byte{}, k.chainCode...)
}

// EDPrivKey converts the extended key to a btcec private key and returns it.
// As you might imagine this is only possible if the extended key is a private
// extended key (as determined by the IsPrivate function).  The ErrNotPrivExtKey
// error will be returned if this function is called on a public extended key.
func (k *ExtendedKey) EDPrivKey() (PrivKey, error) {
	if !k.isPrivate {
		return PrivKey{}, ErrNotPrivExtKey
	}

	privKey, _, err := PrivKeyFromBytes(k.key)
	if err != nil {
		return PrivKey{}, err
	}
	return privKey, nil
}

func (k *ExtendedKey) EDPubKey() (PubKey, error) {
	h := sha512.Sum512(k.key[:32])
	scalar, err := edwards25519.NewScalar().SetBytesWithClamping(h[:32])
	if err != nil {
		panic("ed25519: internal error: setting scalar failed")
	}
	pubKey := (&edwards25519.Point{}).ScalarBaseMult(scalar)

	return PubKey{pubKey.Bytes()}, nil
}

func compressPublicKey(x *big.Int, y *big.Int) []byte {
	var key bytes.Buffer

	// Write header; 0x2 for even y value; 0x3 for odd
	key.WriteByte(byte(0x2) + byte(y.Bit(0)))

	// Write X coord; Pad the key so x is aligned with the LSB. Pad size is key length - header size (1) - xBytes size
	xBytes := x.Bytes()
	for i := 0; i < (PublicKeyCompressedLength - 1 - len(xBytes)); i++ {
		key.WriteByte(0x0)
	}
	key.Write(xBytes)

	return key.Bytes()
}
