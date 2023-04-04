
const style = {
	display: 'flex',
	flexDirection: 'column',
	height: '100%',

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

		video: {
			display: 'flex',
			height: '100%',
			flex: 2,
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
		background: 'red',

		copyright: {
			display: 'block',
			position: 'absolute',
			left: 2,
			top: 2,
			fontSize: '20px'
		}
	},

}

export default style
