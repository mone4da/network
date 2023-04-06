
class Session{
	constructor(id, socket, listen){
		this.id = id
		this.socket = socket

		this.socket.on('disconnect',() => listen({id: 'end', sessionId: id}))
		this.socket.on('signin', data => listen({id: 'signin', data, sessionId: id}))
		this.socket.on('signout', data => listen({id: 'signout', data, sessionId: id}))
		this.socket.on('signal', data => listen({id: 'signal', data, sessionId: id}))
		this.socket.on('reply', data => listen({id: 'reply', data, sessionId: id}))
	}

	sendIn(id, data ){
		this.socket.emit(id, data)
	}

	reply(data){
		this.sendIn('reply', data)
	}
}

module.exports = Session
