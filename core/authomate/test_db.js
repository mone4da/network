
class DB extends require('./one/dispatcher'){
	constructor(){
		super()
		let sections = [{ start: '00000000-0000000000', end: '00000000-00000000FF'},
				{ start: '00000000-0000000100', end: '00000000-00000001FF'}]
		this.load('./data', sections )

		console.log( this.lookup('00000000-00000001A0') )

		let item = {
			password : "pass2",
			address : "00000000-00000001AB",
			data : {
				email : "maryabc@mail.com"
			}
		}

		this.add("00000000-00000001AB", item)

		this.collect(item => {

			console.log(item)
			return true
		})

	}
}


new DB()
