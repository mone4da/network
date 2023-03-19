module.exports = {
	app : {
		port: 3002,
		content: './frontend/build'
	},

	sessionmanager : {
		port: 3003,
	},

	session: {
		time: Date.now(),
		region: 'de',
		flags : [
				{
					id: 'us',
					url: './asset/us.svg',
					name: 'USA'
				},
				{
					id: 'gb',
					url: 'asset/gb.svg',
					name: 'United Kingdom'
				},
				{
					id: 'de',
					url: './asset/de.svg',
					name: 'Germany'
				},
				{
					id: 'sg',
					url: './asset/sg.svg',
					name: 'Singapore'
				},
				{
					id: 'au',
					url: './asset/au.svg',
					name: 'Australia'
				}
		]
	},

	network: {
		family: 'udp4'
	}
}
