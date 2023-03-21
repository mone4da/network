
const style = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	background: 'white',

	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: '50px',
		width: '100%',
		background: 'lightgray',
		logo: {
			width: '40px',
			height: '100%',
			image: {
				width: '40px',
				height: '40px'
			}
		},
		legend : {
			height: '100%',
			width: '40px',
			image: {
				width: '40px',
				height: '40px'
			}
		}
	},

	content: {
		display: 'flex',
		height: '100%',

		chart: {
			display: 'flex',
			height: '100%',
			background: 'red',
			minWidth: '400px'
		},

		info : {
			display: 'flex',
			flexDirection: 'column',
			justtifyContent: 'center',
			alignItems : 'senter',
			height: '100%',
			background:'lightgray',
			fontSize: '2em'
		}
	},

	footer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '40px',
		background: 'lightgray',
		fontFamily: 'Arial, Helvetica, sans-serif',
		fontWeight: 'bold',
		paddingLeft: '4px'
	}
}

export default style