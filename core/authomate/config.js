
module.exports = {
	connection: {
		host: 'https://4digitalasset.com',
		path: '/',
		options: {
			transports: ['websocket', 'polling']
		}
	},

	credentials: {
		key: 'FFFFFFFF-FFFFFFFFFF',
		password: 'pasword',
		address: 'FFFFFFFF-FFFFFFFFFF',

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
