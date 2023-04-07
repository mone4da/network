const dgram = require('node:dgram')
const Binary = require('./binary')

class NetgateSession{
	constructor(config){
		this.edgeId = config.edgeId
		this.channel = new Binary(this.edgeId)

		this.initializeIn(config.inchannel, () => {
			this.initializeOut(config.outchannel, () => {
				this.onInitialized()
			})
		})
	}

	onInitialized(){}

	initializeIn( config, initialized ){
		this.inChannel = dgram.createSocket(config.family)
		this.inChannel.on('listening', () => {
			console.log('listenin on port', config.port)
			initialized()
		})

		this.inChannel.on('message', (data, info) => {
			console.log('network message', data)
			this.onNetworkMessage(data.slice(8), info)
		})

		this.inChannel .bind(config.port)
	}

	initializeOut( config, initialized ){
		this.outChannel = dgram.createSocket(config.family)
		this.outChannel.connect( config.port, config.host, initialized )
	}

	onNetworkMessage( data, info){	}
	onInitialized(){}

	send(data){
		this.outChannel.send(data)
	}

}

module.exports = NetgateSession
