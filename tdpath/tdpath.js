//====== search =================

let search = (graph, entry, exit, consume) => {

    let signal = async (from, tag, length, trace) => {
      if (from === exit)
        consume({ channel: tag, length, trace })
      else
        for (let edge of graph.edges.filter(edge => edge.from === from)) {

	   if (tag % edge.to !== 0){
            signal(edge.to, tag * edge.to  , length + 1,  [...trace, edge.to])
	   }
        }
    }

    signal(entry, entry, 0, [entry])
 }


//====== pearch =================

class Primes{
	constructor(list, current, size, max){
		this.max = max
		this.current = current
		this.size = size
		this.list = [...list]
	}

	add(p){
		let prev = this.list[this.current]
		this.list[this.current] = prev * p

		if (this.list[this.current] > this.max){
			this.list[this.current] = prev

			if (this.current < this.list.length - 1){
				this.size++
				this.current++

				this.list[this.current] = p
				return new Primes(this.list, this.current, this.size, this.max)
			}else{
				return this
			}
		}

		this.size++
		return new Primes(this.list, this.current, this.size, this.max)
	}


	contains(p){
		for(let i=0; i < this.list.length; i++)
			if (this.list[i] % p === 0)
				return i
		return -1
	}
}


let pearch = (graph, entry, exit, consume) => {
    let signal = async (from, tag, length, trace) => {

      if (from === exit)
        consume({ channel: tag, length, trace })
      else
        for (let edge of graph.edges.filter(edge => edge.from === from && edge.from !== edge.to)) {

	   if (tag && !tag.contains(edge.to)){
            signal(edge.to, tag.add(edge.to)  , length + 1,  [...trace, edge.to])
	   }
        }
    }

    let bigone = 2*3*5*7*11*13*17*19*23*29*31*37
    signal(entry, new Primes([entry],0,0, bigone ), 0, [entry])
 }

//===========xearch =================
class Binary {
	constructor(position) {
		this.data = new DataView(new ArrayBuffer(8), 0, 8)

		position && this.set(position)
	}

	add(position) {
		let binary = new Binary()
		binary.data.setBigUint64(0, this.data.getBigUint64(0))

		return binary.set(position)
	}

	set(i) {
		let value = this.data.getBigUint64(0)
		value |= 1n << BigInt(i)

		this.data.setBigUint64(0, value)

		return this
	}

	unset(i) {
		let a = this.data.getBigUint64(0)
		this.set(i)
		let b = this.data.getBigUint64(0)

		this.data.setBigUint64(0, a ^ b)

		return this
	}

	isSet(i) {
		let value = this.data.getBigUint64(0)
		return (value & (1n << BigInt(i))) !== 0n
	}

	flip(i) {
		let value = this.data.getBigUint64(0)
		value ^= 1n << BigInt(i)
		this.data.setBigUint64(0, value)

		return this
	}

	flipAll() {
		let value = this.data.getBigUint64(0)
		this.data.setBigUint64(0, ~value)

		return this
	}


	clear() {
		this.data.setBigUint64(0, BigInt(0))
		return this
	}

	toString() {
		return this.data.getBigUint64(0).toString(2).padStart(64, '0')
	}
}

let xearch = (graph, entry, exit, consume) => {

    let signal = async (from, tag, length, trace) => {
      if (from === exit)
        consume({ channel: tag, length, trace })
      else
        for (let edge of graph.edges.filter(edge => edge.from === from)) {

	   if (!tag.isSet(edge.to)){
            signal(edge.to, tag.add(edge.to)  , length + 1,  [...trace, edge.to])
	   }
        }
    }

    signal(entry, new Binary(entry), 0, [entry])
 }





module.exports = {search, pearch, xearch}
