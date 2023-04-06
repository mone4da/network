
const config = require('./config')

class Session extends require('./session'){
	constructor(id, socket){
		super(id, socket, config.session)
	}

	onInitialized(){
		console.log('session', this.id, 'initialized ...')

		this.notify({id: this.id, data: 'greeting'})
	}

	onEnd(id){
		console.log(id, 'ended')
	}

	onNetworkMessage( data, info ){
		console.log( data )
		this.notify( data )
	}

	onSessionSignin( data ){
		console.log('signing', data)
	}

	onSessionSignout( data ){
		console.log('signout', data)
	}

	onSessionSignal( data ){
		console.log('signal', data)
	}

	onSessionData( data ){
		console.log('data to network', data)
	}

}

class SessionManager extends require('./sessionmanager'){
	constructor(io){
		super(io)
	}

	onInitialized(){
		console.log(config.sessionmanager.greeting)
	}

	createSession(socket){
		return new new Session(this.newSessionId(), socket)
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
