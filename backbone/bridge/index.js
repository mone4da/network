const config = require('./config')
const Channel = require('./channel')

for (let channelConfig of config.channels)
  new Channel(config.path, channelConfig)