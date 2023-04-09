
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
		//remove, add, grant access, notify to others in this edge

		switch(event.id){
			case 'end' : this.signout(event.sessionId); break;
			case 'signout' : this.signout(event.sessionId); break;
			case 'signin' : this.signin(event.sessionId, event.data); break;
			case 'reply' : this.reply(event.sessionId, event.data); break;

			default: console.log('session event', event)

		}
	}

	onNetworkMessage( data, info ){
		console.log('onNetworkMessage', data, info )

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
