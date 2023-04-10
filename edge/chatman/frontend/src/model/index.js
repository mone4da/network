import Session from './session'
import Rest from './rest'

class Model extends Session{
	constructor( initialized ){
		super()

		this.state = {
			system: {},
			user: {
				access: {
					key: '000000-0000000A',
					password: 'a simple password'
				}
			}
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

			this.connect({ path: '/', options: {  transports: ['websocket', 'polling'] }} )
		}


		initialized( this )
	}

	async loadConfig(){
		return await this.rest.config()
	}

	sendAIAIUCHE2(from, to) {
		this.reply(
			from,
			to, {
				'subject': 'AIAUCHE2',
				'detail': 'AIAUCHE2'
		})

	}


	// Event
	onConnection() {
		console.log( 'connected' )
	}

	onDisconnection() {
		console.log('disconnected')
	}

	onConnectionError(error) {
		console.log('connection error', error)
	}

	onSession(data) {
		console.log('on session', data)
		/*this.signin(
			this.state.user.access.key,
			this.state.user.access.password,
			this.state.user.access.key
		)*/
	}

	onGranted(data) {
		this.onUpdate && this.onUpdate(data, 'edge-auth')
	}

	onDenied(data) {
		console.log('denied', data)
	}

	onReply(data) {
		console.log('reply', data)
	}

	//methods
	update(data, id){
		switch(id){
			case 'signin' : this.signing(data.accesskey, data.password, data.accesskey); break;
		}
	}
}

export default Model
