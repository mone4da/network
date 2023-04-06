
class NetgateSession extends require('./netgate'){
	constructor(config){
		super(config)
	}

}

class SessionManager extends NetgateSession{
	constructor(config, io){
		super(config.netgate)

		io.on('connection', socket => this.onConnection( this.createSession(socket)))
	}

	onConnection(sesion){}
	newSessionId(){  return Date.now() }

	createSession( socket ){
		return null
	}

	onNetworkMessage(msg, info){
		console.log(msg)
	}

}

module.exports = SessionManager
