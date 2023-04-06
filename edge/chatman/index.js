
const config = require('./config')

class Session extends require('./session'){
	constructor(id, socket){
		super(id, socket)
	}

	onInitialized(){
		console.log('session', this.id, 'initialized ...')

		this.sendIn('session', {id: this.id, data: Date.now()})
	}

	onEnd(){
		console.log(this.id, 'ended')
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

	onSessionReply( data ){
		console.log('data to network', data)
	}

	onSession( data ){
		console.log('session', data)
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
		return new Session(this.newSessionId(), socket)
	}

	onNetworkMessage( data, info ){
		console.log( data )
		this.reply( data )
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
