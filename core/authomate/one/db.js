const fs = require('fs')

class DB{
	constructor(){
		this.entries = {}
	}

	add(key, data){
		this.entries[key] = data
	}

	remove(key){
		delete this.entries[key]
	}

	lookup(key){
		return this.entries[key]
	}

	collect( condition ){
		return Object.entries(this.entries).map(entry => ({key: entry[0], data: entry[1]}) ).filter( item => condition(item))
	}

	load( path ){
		let data = fs.readFileSync(path, 'utf-8')
		this.entries = JSON.parse( data )
	}

	save( path ){
		fs.writeFileSync( path, JSON.stringify(this.entries), 'utf-8' )
	}

	clear(){
		this.entries = {}
	}
}

module.exports = DB
