
class Session{
	constructor(id, socket, listen){
		console.log('session', id)

		this.id = id
		this.socket = socket

		this.socket.on('disconnect',() => listen({id: 'end', sessionId: id}))
		this.socket.on('signin', data => listen({id: 'signin', data, sessionId: id}))
		this.socket.on('signout', data => listen({id: 'signout', data, sessionId: id}))
		this.socket.on('signal', data => listen({id: 'signal', data, sessionId: id}))
		this.socket.on('reply', data => listen({id: 'reply', data, sessionId: id}))

		//this.standBy()
	}

	standBy(){
		this.timer = setTimeout(()=>this.socket.disconnect() , 600000)
	}

	activate(key){
		console.log(this.timer !== undefined, this.id)

		this.id = key

		this.timer && clearTimeout( this.timer )
		this.timer = undefined

		console.log(this.timer !== undefined, this.id)

	}

	sendIn(id, data ){
		this.socket.emit(id, data)
	}

	reply(data){
		this.sendIn('reply', data)
	}

	//methods
	grant(){
		console.log('send granted ...')
		let data = {
			timestamp: Date.now(),
			from: '',
			to: this.id,
			body: { ok: true, data: 'Welcome'}
		}
		this.sendIn('granted', data)
	}
}

module.exports = Session
