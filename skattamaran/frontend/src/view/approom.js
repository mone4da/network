
let Content = props => {
	const style = {
		display:'flex',
		width: '100%',
		height: '100%',
		background: 'orange'
	}
	return <div style={style} onClick={props.onClose}>
		</div>
}

const AppRoom = props => {
	let {Component, asset, onFocused, onDragged, offset, onClose} = props

	return <Component.Window
			onFocused={onFocused}
			onDragged={onDragged}
			offset={offset}
			icon={asset.icon}>
		<Content onClose={onClose} />
	</Component.Window>
}

export default AppRoom
