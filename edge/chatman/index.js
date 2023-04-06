
const config = require('./config')

class Session extends require('./session'){
	constructor(id, socket, listener){
		super(id, socket, listener)

		console.log('session', this.id, 'initialized ...')
		this.sendIn('session', {id: this.id, data: Date.now()})
	}

}

class SessionManager extends require('./sessionmanager'){
	constructor(io){
		super(config.sessionmanager, io)
	}

	onInitialized(){
		console.log(config.sessionmanager.greeting)
	}

	createSession(socket){
		return new Session(this.newSessionId(), socket, event => this.onSessionEvent(event))
	}

	onSessionEvent(event){
		console.log('session event', event)
		//remove, add, grant access, notify to others in this edge
	}

	onNetworkMessage( data, info ){
		console.log( data )

		//get the fields from and to. Find the session with key to. sendIn
	}

}

class App extends require('./desk'){
	constructor(){
		super(config)
	}

	onInitialized(){
		new SessionManager(this.io)
		console.log(config.app.greeting, config.app.port)
	}

	config(req, res){
		res.json(config.session)
	}
}

new App()
