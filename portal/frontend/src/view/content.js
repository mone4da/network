
let Content = props => {
	let {style, asset} = props

	return <div style={style}>
			<img
				style={style.maintenance.image}
				src={asset.maintenance.image} />
		</div>
}

export default	Content
