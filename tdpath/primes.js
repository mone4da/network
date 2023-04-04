let generatePrimes = max => {
	let list = []
	for (let i = j = 2; i <= max; i++, j = 2) {

		while (j < i && i % j) j++

		if (j === i) {
			list.push(i);
		}
	}

	return list
}

class Primes{
	constructor(capacity, max){
		this.max = max
		this.current = 0
		this.size = 0
		this.list = [...new Array(Math.max(capacity,1))].map( () => 1)
	}

	clear(){
		this.size = 0
		this.current = 0
		this.list = this.list.map(() => 1)
	}

	add(p){
		if (this.current > this.list.length - 1)
			return 0

		let prev = this.list[this.current]
		this.list[this.current] = prev * p

		if (this.list[this.current] > this.max){
			this.list[this.current] = prev
			if (this.current < this.list.length - 1){
				this.current++
				this.size++
				return this.list[this.current] = p
			}
		}

		this.size++
		return this.list[this.current]
	}

	sub(p){
		if (this.isEmpty())
			return 0

		let i = this.current
		while(i >= 0){
			if (this.list[i] % p === 0){
				this.list[i] /= p

				this.size--
				this.current = i

				return this.list[this.curent]
			}

			i--
		}

		return 0
	}

	isEmpty(){
		return this.size === 0
	}

}

module.exports = {Primes, generatePrimes}
