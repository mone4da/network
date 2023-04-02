const config = require('./config')
const dgram = require('node:dgram')

let createSockets = async () => {

	let sockets = []
	for(let target of config.targets){
		let socket = dgram.createSocket(config.family)
		await socket.connect( target.port, target.host )

		sockets.push( socket )
	}

	return sockets
}

createSockets().then( sockets => {

	let a = 0
	let i = 0
	setInterval(() => {
		const message = new Uint8Array([a, 52, 61, 61])

		console.log('sending', i, message[0])

		sockets[i].send(message)

		a = (a + 1) % 256
		i = (i + 1) % sockets.length
	}, config.delay)


})

