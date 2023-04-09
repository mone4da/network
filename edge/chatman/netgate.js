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

	createMessage( data ){
		let dataBytes = Array.from(Buffer.from(JSON.stringify(data), 'utf8'))
		return new Uint8Array([...this.channel.getData(),1, ...dataBytes])
	}

	createSignalMessage( data ){
		let dataBytes = Array.from(Buffer.from(JSON.stringify(data), 'utf8'))
		return new Uint8Array([...this.channel.getData(),0, ...dataBytes])
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

	isSignal( message ){
		return message[8] === 0
	}

	retrieveData(message){
		let str = null
		try{
			str = String.fromCharCode(...message.slice(9))
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
			this.onNetworkMessage(this.retrieveData(msg), { ...info, signal : this.isSignal(msg)} )
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
		this.outChannel.send(this.createMessage( data ) )
	}

	signal( data ){
		this.outChannel.send(this.createSignalMessage( data ) )
	}

}

module.exports = NetgateSession
