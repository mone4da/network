const http = require('http')
const {Server} = require('socket.io')

const Session = require('./session')

class SessionManager{
	constructor(app, config){
		this.httpServer = http.createServer(app)
		this.io = new Server(this.httpServer)

		this.io.on('connection', socket => this.onConnection( this.createSession(socket)))

		this.httpServer.listen(config.port, () => this.onInitialized())
	}

	onInitialized(){}
	onConnection(sesion){}
	newSessionId(){  return Date.now() }

	createSession( socket ){
		return new Session(this.newSessionId(), socket)
	}
}

module.exports = SessionManager
