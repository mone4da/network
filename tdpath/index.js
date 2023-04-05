
const {generate} = require('./primes')
const {generateGraph} = require('./data')
const search = require('./tdpath')

let data = []
generate(37, prime => {
	data.push( prime )
	return false
}, () => {
	console.log('search', data, data.length, data.reduce((p,e) => p*e), 1)

	let graph = generateGraph(data.length, data)

	search(graph, 7, 31, data => {
		console.log(graph.nodes.map(item => item.id), data.length, data.length < 50 ? data : 'too long' )
	})
})



