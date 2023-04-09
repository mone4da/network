
const {generateGraph} = require('./data')
const {search} = require('./xearch')

let data = [...new Array(15)].map((_,i) => i)

let graph = generateGraph(data.length, data)

let min = {
	length: 100,
	path: []
}

let consume = data => {
	if (data.length < min.length){
		min = {
			length: data.length,
			path: data
		}
		console.log( data.channel.toString(), data.trace.join('->'), data.length )
	}
}

search(
	graph, 4, 12,
	(a,b) => a === b,
	data => consume(data)
)
