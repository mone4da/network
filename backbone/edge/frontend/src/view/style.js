
const style = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	background: '#03203d',

	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '70px',
		width: '100%',
		background: '#03203d',
		marginBottom: '10px',

		logo: {
			width: '50px',
			height: '100%',
			image: {
				//width: '40px',
				height: '100%'
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
		flexDirection: 'column',
		height: '100%',

		chart: {
			display: 'flex',
			height: '100%',
			background: 'red'
		},

		info : {
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
			fontSize: '2em'
		}
	},

	footer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		height: '40px',
		background: '#03203d',
		fontFamily: 'Arial, Helvetica, sans-serif',
		fontWeight: 'bold',
		paddingLeft: '4px'
	}
}

export default style
