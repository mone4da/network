
const {generate, generatePrimes} = require('./data')
const search = require('./tdpath')

let graph = generate(13, generatePrimes(50))

let hits = []
search(graph, 2, 11, data => {
	hits.push( data )
})

console.log( hits.sort( (a,b) => a.length - b.length).slice(0, 10) )


