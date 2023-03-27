
let Menu = props => {
	let {Component, asset, onSelection} = props

	let handleButton = id => {
		onSelection && onSelection(id)
	}

	return <Component.Toolbar
			offset={{x: 20, y: 20}}
			height='40px'
			width = '200px'
			grabber = {{width: '40px'}}
			icon={asset.icon}
		>
			<Component.Button
				icon = './asset/app.svg'
				onClick = {() => handleButton('app')}
			/>

			<Component.Button
				icon = './asset/component.svg'
				onClick = {() => handleButton('component')}
			/>

			<Component.Button
				icon = './asset/studio.svg'
				onClick = {() => handleButton('studio')}
			/>

	</Component.Toolbar>

}

export default Menu
