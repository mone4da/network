
const config = require('./config')

class Session extends require('./session'){
	constructor(id, socket){
		super(id, socket)
	}

	onEnd(id){
		console.log(id, 'ended')
	}

	onMessage(id, data){
		console.log(data, 'to', id)
	}
}

class SessionManager extends require('./sessionmanager'){
	constructor(app){
		super(app, config.sessionmanager)
	}

	onInitialized(){
		console.log('sessio manager on', config.sessionmanager.port)
	}
}

class App extends require('./desk'){
	constructor(){
		super(config.app)
	}

	onInitialized(app){
		new SessionManager(app)
		console.log('app on', config.app.port)
	}

	config(req, res){
		res.json(config.session)
	}
}

new App()
