
const config = require('./config')

class Session extends require('./session'){
	constructor(id, socket){
		super(id, socket)

		this.send('welcome', Date.now())
	}

	onEnd(id){
		console.log(id, 'ended')
	}

	onMessage(data){
		console.log(data, 'into', id)
		console.log(data,'out of',id)
		this.send(data)
	}
}

class SessionManager extends require('./sessionmanager'){
	constructor(io){
		super(io)
	}

	onInitialized(){
		console.log(config.sessionmanager.greeting)
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
