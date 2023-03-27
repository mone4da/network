
let Content = props => {
	const style = {
		display:'flex',
		width: '100%',
		height: '100%',
		background: 'lightblue'
	}
	return <div style={style}>
	</div>
}

const ComponentRoom = props => {
	let Component = props.Component
	let asset = props.asset

	return <Component.Window
			offset={{x: 200, y: 200}}
			icon={asset.icon}>
		<Content />
	</Component.Window>
}

export default ComponentRoom
