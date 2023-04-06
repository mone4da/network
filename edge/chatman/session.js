 
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
	constructor(id, socket){
		super(config.netgate)

		this.id = id
		this.socket = socket
	}

	onInitialized(){
		super.onInitialized()

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

	onNetworkMessage(msg, info){}

	onSessionSignin(_){}
	onSessionSignout(_){}
	onSessionSignal(_){}
	onSessionData(_){}

	notify( data ){
		this.socket.emit('data', data.slice(this.channelSize))
	}
}

module.exports = Session
