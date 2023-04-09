const { v4: uuidv4 } = require('uuid')

class NetgateSession extends require('./netgate'){
	constructor(config){
		super(config)
	}

	onNetworkMessage(msg, info){
		console.log(msg)
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
		if (msg.subject != 'error')
			this.notify(msg)

		console.log('onNetworkMessage', msg)
	}

	notify(msg){
		let session = this.sessions[msg.to]
		session?.reply(msg)
	}

	end(_){}
	signin(sessionId, data){
		console.log('signin', data)
		let session = this.sessions[sessionId]
		delete this.sessions[sessionId]

		let address = data.body.address || data.body.accesskey
		session.activate( address )
		this.sessions[ address ] = session
	}

	signout( sessionId ){
		delete this.sessions[sessionId]
	}

	signal( sessionId, data){
		this.signal( data )
	}

	reply(sessionId, data){
		try{
			let target = this.sessions[ data.to ]
			if (target){
				target.reply( data )
			}else
				this.send( data )
		}catch(e){
			console.log('error', data)
		}
	
	}
}

module.exports = SessionManager
