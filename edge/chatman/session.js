
class Session{
	constructor(id, socket){
		this.id = id
		this.socket = socket
		this.socket.on('disconnect',() => this.onEnd(id))

		this.socket.on('data', data => this.onMessage(data))
	}

	onEnd(id){}
	onMessage(msg){
		switch(msg.id){
			case 'signin' : this.onSessionSignin(msg.data); break;
			case 'signout' : this.onSessionSignout(msg.data); break;
			case 'signal' :  this.onSessionSignal(msg.data); break;
			case 'data' : this.onSessionData(msg.data); break;
		}
	}

	this.onSessionSignin(_){}
	this.onSessionSignout(_){}
	this.onSessionSignal(_){}
	this.onSessionData(_){}

	notify(data){
		this.socket.emit('data', data )
	}
}

module.exports = Session
