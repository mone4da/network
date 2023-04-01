
let Content = props => {
	const style = {
		display:'flex',
		width: '100%',
		height: '100%',
		background: 'black'
	}
	return <div style={style} onClick={props.onClose}>
		</div>
}

const Cli = props => {
	let {Component, asset, offset, onFocused, onDragged, onClose} = props

	return <Component.Window
			offset={offset}
			onFocused={onFocused}
			onDragged={onDragged}
			icon={asset.icon}>
		<Content onClose={onClose} />
	</Component.Window>
}

export default Cli
