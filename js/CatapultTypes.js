var CatapultTypes = function(app) {
	// sorted by "facility" (second byte)
	this.helpers({
		TxType: {
			AccountLink:           0x414C,
			AggregateComplete:     0x4141,
			AggregateBonded:       0x4241,
			HashLock:              0x4148,
			SecretLock:            0x4152,
			SecretProof:           0x4252,
			MosaicDefinition:      0x414D,
			MosaicSupplyChange:    0x424D,
			RegisterNamespace:     0x414E,
			AliasAddress:          0x424E,
			AliasMosaic:           0x434E,
			AddressProperty:       0x4150,
			MosaicProperty:        0x4250,
			TransactionTypeProperty: 0x4350,
			Transfer:              0x4154,
			ModifyMultisigAccount: 0x4155
		}
	});
};
