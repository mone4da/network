
const {generateGraph} = require('./data')
const {xearch : search} = require('./tdpath')

let data = [...new Array(15)].map((_,i) => i)

let graph = generateGraph(data.length, data)

let min = {
	length: 100,
	path: []
}

search(graph, 4, 12, data => {
	if (data.length < min.length){
		min = {
			length: data.length,
			path: data
		}
		console.log( data.channel.toString(), data.trace.join('->'), data.trace.length - 1 )
	}
})
