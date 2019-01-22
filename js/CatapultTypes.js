var CatapultTypes = function(app) {
	// sorted by "facility" (second byte)
	this.helpers({
		TxType: {
			AggregateComplete:     0x4141,
			AggregateBonded:       0x4241,
			HashLock:              0x414C,
			SecretLock:            0x424C,
			SecretProof:           0x434C,
			MosaicDefinition:      0x414D,
			MosaicSupplyChange:    0x424D,
			RegisterNamespace:     0x414E,
			Transfer:              0x4154,
			ModifyMultisigAccount: 0x4155
		}
	});
};
