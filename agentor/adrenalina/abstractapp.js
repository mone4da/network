
module.exports = class extends require('./session') {
	constructor(config) {
		super(config.connection)
	}

	onConnection() {
		this.onAccessing();

		var cred = this.getCredentials()
		this.signin(cred.key, cred.password)
	}

	getCredentials() {
		return { 'key': '', 'password': '' };
	}

	sendAIAIUCHE2(from, to) {
		this.reply(
			from,
			to, {
				'subject': 'AIAUCHE2',
				'detail': 'AIAUCHE2'
		})

	}


	sendBall(from, to) {
		this.reply(
		from,
		to, {
			'subject': 'play',
			'detail': 'pow'
		})
	}

	onDenied(data) {
		this.onAccess(false)
	}

	onGranted(data) {
		this.onAccess(true)
	}

	onReply(data) {
		let msg = data.body
		switch (msg.subject) {
			case 'AIAIUCHE2': this.onAIAUCHE2(msg); break;
			case 'enter': this.onEnter(msg); break;
			case 'play': this.onPlay(msg); break;
		}
	}

	//Events - internal
	onAccess(_) { }
	onAccessing() { }

	//Events - blackflower
	onAIAUCHE2(msg) { }
	onEnter(_) { }
	onPlay(_) { }
}
