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

		netgate: {
			edgeId: 2,

			inchannel: {
				family: 'udp4',
				port: 20001
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
