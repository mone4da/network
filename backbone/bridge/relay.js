const dgram = require('node:dgram')

module.exports = class Relay{
	constructor(family, address, port){
		this.socket = dgram.createSocket(family)
		this.socket.connect(port, address)

		this.port = port
		console.log(family, address, port)

	}

	send(data){
		console.log('forwarding', this.port, data.toString())
		this.socket.send(data)
	}
}
