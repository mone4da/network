
import {Manager} from 'socket.io-client'

class Session{
	constructor( listener ){
		this.manager = new Manager()
		this.socket = this.manager.socket('/')

		this.socket.emit('data', 'hello there')
		this.socket.on('data', data => listener(data))
	}
}

export default Session
