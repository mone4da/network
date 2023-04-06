
const {generate} = require('./primes')
const {generateGraph} = require('./data')
const {search} = require('./tdpath')

let data = []
generate(37, prime => {
	data.push( prime )
	return false
}, () => {
		let graph = generateGraph(data.length, data)

		let min = {
			length: 100,
			path: []
		}
		search(graph, 7, 31, data => {
		if (data.length < min.length){
			min = {
				length: data.length,
				path: data
			}
			console.log(data.channel, data.trace.join('->'), data.trace.length )
		}
	})
})



