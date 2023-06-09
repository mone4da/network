const { Worker } = require('node:worker_threads')

module.exports = class Channel {
  constructor(path, config) {

    this.lanes = [
      new Worker(path.lane, { workerData: { data: config.lanes[0], id: config.id, path: path.relay } }),
      new Worker(path.lane, { workerData: { data: config.lanes[1], id: config.id, path: path.relay } }),
    ].forEach(lane => {
      lane.on('message', data => {
        console.log('lane', data)
      })
    })
  }
}
