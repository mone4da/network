
const {generate, generatePrimes} = require('./data')
const search = require('./tdpath')

let graph = generate(19, generatePrimes(100))

search(graph, 2, 17, data => {
	console.log(data.length, data.length < 50 ? data.channel : 'too long' )
})


