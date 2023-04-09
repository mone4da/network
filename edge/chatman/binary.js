
class Binary {
	constructor(position) {
		this.data = new DataView(new ArrayBuffer(8), 0, 8)

		position && this.set(position)
	}

	getData() {
		return new Uint8Array(this.data.buffer)
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

module.exports = Binary
