module.exports = {
	app : {
		greeting: 'app on',
		port: 3002,
		content: './frontend/build'
	},

	sessionmanager : {
		greeting: 'session manager on'
	},

	session: {
		copyright: '4 Digital Asset © 2023',
		time: Date.now(),
		region: 'de',
		regions : [
				{
					id: 'us',
					url: './asset/us.svg',
					name: 'USA',
					position: {x: 20, y: 100},
					location: 'http://209.126.87.46:3002'
				},
				{
					id: 'gb',
					url: 'asset/gb.svg',
					name: 'United Kingdom',
					position: {x: 160, y: 50},
					location: 'http://149.102.150.233:3002'
				},
				{
					id: 'de',
					url: './asset/de.svg',
					name: 'Germany',
					position: {x: 300, y: 100},
					location: 'http://217.76.52.255:3002'
				},
				{
					id: 'sg',
					url: './asset/sg.svg',
					name: 'Singapore',
					position: {x: 300, y: 200},
					location: 'http://194.233.89.26:3002'
				},
				{
					id: 'au',
					url: './asset/au.svg',
					name: 'Australia',
					position: {x: 20, y: 200},
					location: 'http://154.26.154.29:3002'
				}
		]
	},

	network: {
		family: 'udp4'
	}
}
