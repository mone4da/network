
import {useState} from 'react'

let Menu = props => {
	let {Component, asset, onSelection, visible} = props

	let handleButton = id => {
		onSelection && onSelection(id)
	}


	return visible && <Component.Toolbar
			offset={{x: 20, y: 20}}
			height='40px'
			width = '200px'
			grabber = {{width: '40px'}}
			icon={asset.icon}
		>

			<Component.Icon
				icon = './asset/logo.svg'
			/>

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

			<Component.Button
				icon = './asset/cli.svg'
				onClick = {() => handleButton('cli')}
			/>

	</Component.Toolbar>

}

export default Menu
