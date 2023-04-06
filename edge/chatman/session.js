
class Session{
	constructor(id, socket){
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
