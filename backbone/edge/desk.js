const xpr = require('express')
const app = xpr()

class Desk{
	constructor(config){
		app.use(xpr.static(config.content))

		app.get('/config', (req, res) => this.config(req, res))

		app.listen(config.port, ()=> this.onInitialized(app))
	}

	onInitialized(app){}

	config(req, res){}
}

module.exports = Desk
