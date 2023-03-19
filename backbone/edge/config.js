module.exports = {
	app : {
		port: 3002,
		content: './frontend/build'
	},

	sessionmanager : {
		port: 3003,
	},

	network: {
		family: 'udp4'
	}
}
