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

	retrieveTag(message){
		let binary = new Binary()
		binary.setData(message.slice(0, 8))
		return binary
	}

	error(error, detail){
	return {
	      timespamp: Date.now(),
	      from: '',
	      to: '',
	      subject: 'error',
	      body:  { error, detail  }
	    }
	}

	retrieveData(message){
		let str = null
		try{
			str = String.fromCharCode(...message.slice(8))
			return JSON.parse(str)
		}catch(e){
			return this.error( e.toString(), str )
		}
	}

	retrieveTag(message){
		return message.slice(0, 8)
	}

	initializeIn( config, initialized ){
		this.inChannel = dgram.createSocket(config.family)
		this.inChannel.on('listening', () => {
			console.log('listenin on port', config.port)
			initialized()
		})

		this.inChannel.on('message', (msg, info) => {
			this.onNetworkMessage(this.retrieveData(msg), info)
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
