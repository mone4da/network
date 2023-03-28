import {useState} from 'react'
import AppRoom from './approom'
import ComponentRoom from './componentroom'
import Studio from './studio'

let renderApp = (name, Component, asset, offset, onFocused, onDragged, onClose) => {
	switch(name){
		case 'app' : return  <AppRoom Component={Component} asset = {asset.approom} offset={offset}  onFocused={onFocused} onDragged={onDragged} onClose={onClose} />
		case 'component' : return<ComponentRoom Component={Component} asset = {asset.componentroom} offset={offset} onFocused={onFocused} onDragged={onDragged} onClose={onClose}/>
		case 'studio' : return <Studio Component={Component} asset = {asset.studio} offset={offset} onFocused={onFocused} onDragged={onDragged} onClose={onClose}/>
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
		onDragged,
		onClose} = props


	let handleFocused = (id, offset) => {
		onFocused && onFocused(id, offset)
	}

	let handleDragged = (id, offset) => {
		onDragged && onDragged(id, offset)

	}

	let handleClose = id => {
		onClose && onClose(id)
	}


	return <>{types.map(data => renderApp(
					data.id,
					Component,
					asset,
					data.offset,
					offset=>handleFocused(data.id, offset),
					offset => handleDragged(data.id, offset),
					() => handleClose(data.id)
				)
			)}</>

}

export default  AppManager
