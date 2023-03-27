
let Content = props => {
	const style = {
		display:'flex',
		width: '100%',
		height: '100%',
		background: 'red'
	}
	return <div style={style}>
	</div>
}

const Studio = props => {
	let Component = props.Component
	let asset = props.asset

	return <Component.Window
			offset={{x: 200, y: 200}}
			icon={asset.icon}>
		<Content />
	</Component.Window>
}

export default Studio
