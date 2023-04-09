
const config = require('./config')

class DB extends require('./one/db'){
	constructor(){
		super()
		this.load('./data/item_1.json')

		this.collect(item => {

			console.log(item)
			return true
		})
	}
}

class App extends require('./adrenalina/abstractapp'){
	constructor(config){
		super(config.host)
	}

	getCredentials() {
		return config.credentials
	}

}

//new App()

new DB()
