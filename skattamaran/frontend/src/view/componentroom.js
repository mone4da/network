
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
	let {Component, asset, onFocused, onDragged, offset} = props

	return <Component.Window
			onFocused={onFocused}
			onDragged={onDragged}
			offset={offset}
			icon={asset.icon}>
		<Content />
	</Component.Window>
}

export default ComponentRoom
