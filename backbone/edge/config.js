module.exports = {
	app : {
		port: 3002,
		content: './frontend/build'
	},

	sessionmanager : {
		port: 3003,
	},

	session: {
		copyright: '4 Digital Asset Handelsbolag © 2023',
		time: Date.now(),
		region: 'de',
		regions : [
				{
					id: 'us',
					url: './asset/us.svg',
					name: 'USA',
					position: {x: 20, y: 20}
				},
				{
					id: 'gb',
					url: 'asset/gb.svg',
					name: 'United Kingdom',
					position: {x: 20, y: 60}
				},
				{
					id: 'de',
					url: './asset/de.svg',
					name: 'Germany',
					position: {x: 50, y: 60}
				},
				{
					id: 'sg',
					url: './asset/sg.svg',
					name: 'Singapore',
					position: {x: 120, y: 120}
				},
				{
					id: 'au',
					url: './asset/au.svg',
					name: 'Australia',
					position: {x: 220, y: 220}
				}
		],
		links: [
			{a:{id: 'us', x:  20, y: 20}, b:{id:'gb', x:20, y: 60}},
			{a:{id: 'gb', x: 20, y: 60}, b:{id:'de', x:50, y: 60}},
			{a:{id: 'de', x: 50, y: 60}, b:{id: 'sg', x:120, y: 120}},
			{a:{id:'sg', x: 120, y: 120}, b:{id: 'au', x:220, y: 220}}
		]
	},

	network: {
		family: 'udp4'
	}
}
