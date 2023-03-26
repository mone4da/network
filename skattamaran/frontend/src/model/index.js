import Session from './session'
import Rest from './rest'

class Model{
	constructor( initialized ){
		this.state = {
			system: {},
			user: {}
		}
		this.initialize( initialized )
	}

	async initialize( initialized ){
		this.rest = new Rest()
		let config = await this.loadConfig()

		this.state.ok = config.ok


		if (this.state.ok){
			this.state.system.region = config.data.region
			this.state.system.copyright = config.data.copyright

			this.state.user.apps = config.data.apps

			this.session = new Session( data => this.onUpdate && this.onUpdate(data, 'session') )
		}


		initialized( this )
	}

	async loadConfig(){
		return await this.rest.config()
	}
}

export default Model
