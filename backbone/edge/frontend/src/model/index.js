
//import {Session} from './session'
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
			this.state.system.flags = config.data.flags
			this.state.system.region = config.data.region
		}


		initialized( this )
	}

	async loadConfig(){
		return await this.rest.config()
	}
}

export default Model
