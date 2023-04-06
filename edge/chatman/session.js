 
class NetgateSession extends require('./netgate'){
	constructor(config){
		super(config)
	}

	onInitialized(){
		let address = socket.address()
		console.log(address)
	}
}


class Session extends NetgateSession{
	constructor(id, socket, config){
		super(config.netgate)

		this.id = id
		this.socket = socket
	}

	onInitialized(){
		super.onInitialized()

		this.socket.on('disconnect',() => this.onEnd())
		this.socket.on('signin', data => this.onSessionSignin(data))
		this.socket.on('signout', data => this.onSessionSigniout(data))
		this.socket.on('signal', data => this.onSessionSignal(data))
		this.socket.on('reply', data => this.onSessionReply(data))
	}

	onEnd(){}
	onNetworkMessage(msg, info){}
	onSessionSignin(_){}
	onSessionSignout(_){}
	onSessionSignal(_){}
	onSessionReply(_){}

	sendIn(id, data ){
		this.socket.emit(id, data)
	}

	reply(data){
		this.sendIn('reply', data)
	}
}

module.exports = Session
