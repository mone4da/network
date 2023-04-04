
const style = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	width: '100%',
	background: 'black',

	header: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '40px',
		background: 'blue'
	},

	communication: {
		display: 'grid',
		gridTemplateRow: '50% 50%',
		height: '100%',

		video: {
			display: 'flex',
			height: '100%',
			background: 'orange'
		},

		message: {
			display: 'flex',
			height: '100%',
			background: 'white'
		},

		contacts : {
			display: 'flex',
			flexDirection: 'column',
			height: '100%'
		}
	},

	organisation: {
		height: '40px',
		background: 'black',

		copyright: {
			display: 'block',
			padding: 2,
			fontSize: '20px'
		}
	},
}

export default style
