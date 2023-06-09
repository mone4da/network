const { parentPort, workerData, Worker } = require('node:worker_threads')
const dgram = require('node:dgram')
const Relay = require('./relay')

const { data, path } = workerData
const { id, port, family, hosts } = data

const relays = hosts.map(({id, family, port, address}) => new Relay(id, family, address, port) )

let forward = data => {
  relays.forEach(relay => {
	relay.send(data)
  })
}

const socket = dgram.createSocket(family)
socket.on('listening', () => {
  let address = socket.address()

  parentPort.postMessage(address)
})

socket.on('message', (data, info) => {
  forward(data)
})

socket.bind(port)
