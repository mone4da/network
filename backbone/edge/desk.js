const xpr = require('express')
const app = xpr()

class Desk{
	constructor(config){
		app.use(xpr.static(config.content))


		app.listen(config.port, ()=> this.onInitialized(app))
	}

	onInitialized(app){}
}

module.exports = Desk
