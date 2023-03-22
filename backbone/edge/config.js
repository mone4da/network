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
					position: {x: 20, y: 100}
				},
				{
					id: 'gb',
					url: 'asset/gb.svg',
					name: 'United Kingdom',
					position: {x: 160, y: 50}
				},
				{
					id: 'de',
					url: './asset/de.svg',
					name: 'Germany',
					position: {x: 300, y: 100}
				},
				{
					id: 'sg',
					url: './asset/sg.svg',
					name: 'Singapore',
					position: {x: 300, y: 200}
				},
				{
					id: 'au',
					url: './asset/au.svg',
					name: 'Australia',
					position: {x: 20, y: 200}
				}
		],
		links: [
			{a:{id: 'us', x:  40, y: 120}, b:{id:'gb', x:180, y: 70}},
			{a:{id: 'gb', x: 180, y: 70}, b:{id:'de', x:320, y: 120}},
			{a:{id: 'de', x: 320, y: 120}, b:{id: 'sg', x:320, y: 220}},
			{a:{id:'sg', x: 320, y: 220}, b:{id: 'au', x:40, y: 220}}
		]
	},

	network: {
		family: 'udp4'
	}
}
