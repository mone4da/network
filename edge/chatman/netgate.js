const config = require('./config')
const dgram = require('node:dgram')

class NetgateSession{
	constructor(session, config){
		this.session = session

		this.session.onMessage = data => this.onSessionMessage(data)

		this.initializeIn(config.inchannel, () => {
			this.initializeOut(config.outChannel, () => {
				this.onInitialized()
			})
		})
	}

	onInitialized(){}

	initializeIn( config, initialized ){
		this.inChannel = dgram.createSocket(config.family)
		this.inChannel.on('listening', () => {
			initialized()
		})

		this.inChannel.on('message', (data, info) => {
			this.onMessage(data, info)
		})

		this.inChannel .bind(config.port)
	}

	initializeOut( config, initialized ){
		this.outChannel = dgram.createSocket(config.family)
		this.outChannel.connect( config.port, config.host, initialized )
	}

	onMessage( data, info){	}
	onInitialized(){}
	onSessionMessage(_){}

	send(data){
		this.outChannel.send(data)
	}

	notify(data){
		this.session.send(data)
	}
}

module.exports = NetgateSession
