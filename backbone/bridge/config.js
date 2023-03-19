module.exports = {
  path: {
    lane: './lane.js',
  },

  channels: [
    {
      id: 'channel 0',

      lanes: [
        {
          id: 0,
          port: 20000,
          family: 'udp4',
          hosts: [
            {
              address: '194.233.89.26',
              //address: 'localhost',
              port: 20000,
              //port: 30010,
              family: 'udp4'
            }
          ]
        },

        {
          id: 1,
          port: 30000,
          family: 'udp4',
          hosts: [
            {
              address: 'localhost',
              port: 30010,
              family: 'udp4'
            },
	   {
              address: '149.102.150.233',
              port: 30000,
              family: 'udp4'

           }
          ]
        }
      ]
    }
  ]
}
