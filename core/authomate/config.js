
module.exports = {
	connection: {
		host: 'https://4digitalasset.com:1443',
		path: '/',
		options: {
			transports: ['websocket', 'polling']
		}
	},

	credentials: {
		key: 'FFFFFFFF-FFFFFFFFFF',
		password: 'e439a168-d7fc-11ed-b64e-005056492a84',
		address: 'FFFFFFFF-FFFFFFFFBB',

		managers: {
			'FFFFFFFF-FFFFFF0000': {
				password: 'ec5a7312-d7e4-11ed-81be-005056492a84'
			}
		}
	},

	db : {
		path: './data',
		sections: 	[{ start: '00000000-0000000000', end: '00000000-00000000FF'},
				{ start: '00000000-0000000100', end: '00000000-00000001FF'}]
	}
}
