const dgram = require('node:dgram')

class NetgateSession{
	constructor(config){
		this.edgeId = config.edgeId

		this.initializeIn(config.inchannel, () => {
			this.initializeOut(config.outchannel, () => {
				this.onInitialized()
			})
		})
	}

	initializeChannel(size){

		  let position = Math.floor(this.edgeId / 8)
		  let offset = this.edgeId % 8

		  this.channel = [...new Array(size)].map((_, i) => i !== position ? 0 : 128 >> offset )
	}


	onInitialized(){}

	initializeIn( config, initialized ){
		this.inChannel = dgram.createSocket(config.family)
		this.inChannel.on('listening', () => {
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
