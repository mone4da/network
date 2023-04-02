const config = require('./config')
const dgram = require('node:dgram')

const socket = dgram.createSocket(config.family)
socket.on('listening', () => {
  let address = socket.address()
  console.log(address)
})

socket.on('message', (data, info) => {
  console.log('receiving', data.toString())
})

socket.bind(config.port)
