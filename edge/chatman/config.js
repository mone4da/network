module.exports = {
	app : {
		greeting: 'app on',
		port: 1443,
		content: './frontend/build',

		security: {
			key: './security/key.pem',
			cert: './security/cert.pem'
		}
	},

	sessionmanager : {
		greeting: 'session manager on at ' + Date.now(),

		credentials: {
			accesskey: 'FFFFFFFF-FFFFFF0000',
			password: 'ec5a7312-d7e4-11ed-81be-005056492a84'
		},

		accesscontroller: {
			credentials: {
				address: 'FFFFFFFF-FFFFFFFFFF',
				accesskey: 'FFFFFFFF-FFFFFFFFFF',
				password: 'e439a168-d7fc-11ed-b64e-005056492a84'
			}
		},

		netgate: {
			edgeId: 0,

			inchannel: {
				family: 'udp4',
				port: 30010
			},

			outchannel: {
				family: 'udp4',
				port: 20000,
				host: 'localhost'
			}
		}
	},

	session: {
		copyright: '4 Digital Asset © 2023',
		time: Date.now(),
		region: {
			id: 'de',
			name: 'Germany',
			icon: './asset/de.svg'
		}

	},

}
