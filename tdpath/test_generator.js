const {generate} = require('./primes')

let config = {
	max : 500
}

let time = Date.now()

let benchmark = size => {
	console.log('size', size, 'time', Date.now() - time)
}

let print = prime => {
	console.log(prime)
	return false
}

generate(
	config.max ,
	prime => print(prime) ,
	size => benchmark(size) )
