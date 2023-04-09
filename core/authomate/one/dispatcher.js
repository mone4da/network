
const DB = require('./db')

class Dispatcher{
	constructor(){
		this.dbs = {}
	}

	db( key ){
		let json = item => {
			let pair = item.split('|')
			return { start: pair[0], end: pair[1] }
		}

		let sections = Object
				.keys( this.dbs )
				.map( item => json(item) )

		let section = sections.find( item => (item.start <= key) && (key <= item.end ) )

		return section && this.dbs[ `${section.start}|${section.end}` ]
	}

	add(key, data){
		this.db(key)?.add(key, data)
	}

	lookup( key ){
		return this.db(key)?.lookup(key)
	}

	remove( key ){
		this.db(key)?.remove(key)
	}


	collect( condition ){
		Object.values(this.dbs).forEach( db => db.collect(condition) )
	}

	load( path, sections){
		this.dbs = {}
		for(let section of sections){
			let db = new DB()
			db.load(`${path}/${section.start}-${section.end}.json` )

			this.dbs[`${section.start}|${section.end}`] = db
		}
	}

	save(path){
		Object.values( this.dbs ).forEach( db => db.save( `${path}/${section.start}-${section.end}.json` ) )
	}
}

module.exports = Dispatcher
