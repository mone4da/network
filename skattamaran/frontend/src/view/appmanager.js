import {useState} from 'react'
import AppRoom from './approom'
import ComponentRoom from './componentroom'
import Studio from './studio'
import Cli from './cli'

const availableTypes = ['app','component','studio','cli']

const defaultPosition = {x: 200, y: 200}

let renderApp = (name, Component, asset, offset, onFocused, onDragged, onClose) => {
	switch(name){
		case 'app' : return  <AppRoom Component={Component} asset = {asset.approom} offset={offset} onFocused={onFocused} onDragged={onDragged} onClose={onClose} />
		case 'component' : return<ComponentRoom Component={Component} asset = {asset.componentroom}  offset={offset} onFocused={onFocused} onDragged={onDragged} onClose={onClose}/>
		case 'studio' : return <Studio Component={Component} asset = {asset.studio}  offset={offset}  onFocused={onFocused} onDragged={onDragged} onClose={onClose}/>
		case 'cli' : return <Cli Component={Component} asset = {asset.cli}  offset={offset}  onFocused={onFocused} onDragged={onDragged} onClose={onClose}/>
	}

	return null
}

let AppManager = props => {
	let {
		types,
		Component,
		state,
		asset,
		style,
		onUpdate,
		event,
		onFocused,
		onClose} = props

	let [positions, setPositions] = useState( Object.fromEntries( availableTypes.map(type => [type, defaultPosition]) ) )


	let handleFocused = (id, offset) => {
		onFocused && onFocused(id, offset)
	}

	let handleDragged = (id, offset) => {
		setPositions( positions => {
			positions[id] = offset
			return positions
		})
	}

	let handleClose = id => {

		setPositions( positions => {
			positions[id] = defaultPosition
			return positions
		})

		onClose && onClose(id)
	}


	return <>{types.map(id => renderApp(
					id,
					Component,
					asset,
					positions[id],
					() => handleFocused(id),
					offset => handleDragged(id, offset),
					() => handleClose(id)
				)
			)}</>

}

export default  AppManager
