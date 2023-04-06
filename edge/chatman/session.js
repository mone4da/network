
class Session{
	constructor(id, socket){
		this.id = id
		this.socket = socket
		this.socket.on('disconnect',() => this.onEnd(id))

		this.socket.on('data', data => this.onMessage(data))
	}

	onEnd(id){}
	onMessage(data){
		this.onSessionMessage && this.onSessionMessage(data)
	}

	initializeChannel(size){

		  let setBit = p => (128 >> p)

		  let position = Math.floor(this.id / 8)
		  let offset = this.id % 8

		  let data = [...new Array(size)].map((_, i) => i !== position ? 0 : setBit(offset))

		  this.channel = data.map(v => v.toString(16).padStart(2, '0')).join('')
	}


	send(data){
		if (this.channel){
			this.socket.emit('data', this.channel + ':' + data)
		}
	}
}

module.exports = Session
