const {generate} = require('./primes')

let time = Date.now()

let benchmark = last => {
	console.log('time', Date.now() - time)
}

generate( 99999, prime => false , () => benchmark() )
