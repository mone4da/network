
const config = require('./config')

class DB extends require('./one/dispatcher'){
	constructor(config){
		super()
		this.load(config.path, config.sections)
	}
}

class App extends require('./adrenalina/abstractapp'){
	constructor(){
		super(config)

		//this.db = new  DB(config.db)
	}

	getCredentials() {
		return config.credentials
	}

	onAccessing(){
		console.log('accessing ....')
	}

}

new App()
