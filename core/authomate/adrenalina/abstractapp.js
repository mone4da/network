
class AbstractApp extends require('./session') {
	constructor(config) {
		super(config)
	}

	onConnection() {
		this.onAccessing();

		var cred = this.getCredentials()
		this.signin(cred.key, cred.password, cred.address)
	}

	getCredentials() {
		return { accesskey: '', password: '' }
	}

	sendAIAIUCHE2(from, to) {
		this.reply(
			from,
			to, {
				subject: 'AIAUCHE2',
				detail: 'AIAUCHE2'
		})

	}


	onDenied(data) {
		this.onAccess(false)
	}

	onGranted(data) {
		this.onAccess(true)
	}

	onReply(data) {
		let msg = data
		switch (msg.subject) {
			case 'AIAIUCHE2': this.onAIAUCHE2(msg); break;
			case 'enter': this.onEnter(msg); break;
		}
	}

	//Events - internal
	onAccess(_) { }
	onAccessing() { }

	//Network specific events
	onAIAUCHE2(msg) { }
	onEnter(_) { }
}

module.exports = AbstractApp
