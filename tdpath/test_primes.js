const {Primes, generate} = require('./primes')

let benchmark = last => {
	console.log('time', Date.now() - time)

	console.log('find', last, 'in', primes.list, 'with', primes.size, 'elements')
	time = Date.now()
	console.log( primes.contains(last) )
	console.log('time', Date.now() - time)
}


let primes = new Primes(300, 6469693230)

let last = 2
let time = Date.now()
generate( 9999999999999, prime => {
	if (primes.add(prime)){
		last = prime
		return false
	}

	benchmark( last )

	return true
}, () => benchmark( last ) )
