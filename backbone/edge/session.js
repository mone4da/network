
class Session{
	constructor(id, socket){
		socket.on('disconnect', this.onEnd(id))

		socket.on('data', data => this.onMessage(id, data))
	}

	onEnd(id){}
	onMessage(id, data){}
}

module.exports = Session
