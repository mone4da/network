const {Primes, generate} = require('./primes')

let benchmark = last => {
	console.log('time', Date.now() - time)

	console.log('find', last, 'in', primes.list, 'with', primes.size, 'elements')
	time = Date.now()
	console.log( primes.contains(last) )
	console.log('time', Date.now() - time)
}


let bigone = 2*3*5*7*11*13*17*19*23*29*31*37
let primes = new Primes(8, bigone)

let last = 2
let time = Date.now()
generate( 999999, prime => {
	if (primes.add(prime)){
		last = prime
		return false
	}

	benchmark( last )

	return true
}, () => benchmark( last ) )
