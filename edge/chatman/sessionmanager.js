const { v4: uuidv4 } = require('uuid')

class NetgateSession extends require('./netgate'){
	constructor(config){
		super(config)
	}

}

class SessionManager extends NetgateSession{
	constructor(config, io){
		super(config.netgate)

		this.sessions = {}

		io.on('connection', socket => this.onConnection( this.createSession(socket)))
	}

	onConnection(session){
		this.sessions[session.id] = session
	}

	newSessionId(){  return uuidv4() }

	createSession( socket ){
		return null
	}

	onNetworkMessage(msg, info){
		console.log(msg)
	}

	end(_){}
	signin(_){}
	signout(_){}
	signal(_){}
	reply(_){}
}

module.exports = SessionManager
