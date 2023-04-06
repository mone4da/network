
import {Manager} from 'socket.io-client'

class Session{
	constructor(){
		this.manager = new Manager()
	}

	connect(config){
		console.log(config)
		this.socket = this.manager.socket(config.path, config.options)

		this.socket.on('connect', () => { this.onConnection() })
		this.socket.on('disconnect', () => { this.onDisconnection() })
		this.socket.on('connect_error', _ => this.onConnectionError(_))
		this.socket.on('session', _ => this.onSession(_))
		this.socket.on('granted', _ => this.onGranted(_))
		this.socket.on('denied', _ => this.onDenied(_))
		this.socket.on('reply', _ => this.onReply(_))
	}

	// Event
	onConnection() { }
	onDisconnection() { }
	onConnectionError(_) { }
	onSession(_) { }
	onGranted(_) { }
	onDenied(_) { }
	onReply(_) { }

	//Method
	send(id, data) {
		this.socket.emit(id, { ...data, timestamp: Date.now() })
	}

	signin(accesskey, password) {
		this.send('signin', {
			'key': accesskey,
			'password': password
		})
	}

	signout(accesskey, password) {
		this.send('signout', {
			'key': accesskey,
			'password': password
		})
	}

	signal(from, to, data) {
		this.send('signal', {
			'from': from,
			'to': to,
			...data
		})
	}

	reply(from, to, data) {
		this.send('reply', {
			'from': from,
			'to': to,
			...data
		})
	}


}

export default Session
