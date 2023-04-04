const {Primes, generatePrimes} = require('./primes')

let primes = new Primes(6, 6469693230)

let list = generatePrimes(7000)

console.log( list )


for(prime of list){
	let prod = primes.add(prime)
	if (prod === 0)
		break
}

console.log(primes.size, primes.list )


primes.sub(17)

console.log(primes.size, primes.list)

primes.add(17)

console.log(primes.size, primes.list)

console.log( primes.contains(23) )
console.log( primes.contains(487) )
