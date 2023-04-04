module.exports = {
	delay: 10,
	family: 'udp4',

	targets : [
		{
			host: 'localhost',
			port:20000
		},

		{
			host: 'localhost',
			port:30000
		}

	],

	adrenaline : {
		key: '00000000-000000012B',
		password: 'KIHOWZPGLHLPVZ5C',
		peer: '00000000-00000003D8',

		connection: {
			host: 'http://217.76.52.255:23571',
			option: {
				reconnection: true,
				transports: ["websocket", "polling"]
			}
		}
}
