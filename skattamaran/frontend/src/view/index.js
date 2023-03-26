import {useState} from 'react'

import Component from './component'

import Menu from './menu'
import AppManager from './appmanager'

import style from './style'
import asset from './asset'

let View = props => {
	let {state, event, onUpdate} = props

	let [apps, setApps] = useState(state.user.apps)

	let handleMenu = type => {
		console.log('add to desktop', type)
	}

	return (
		<div style={style}>
			<Menu
				Component={Component}
				asset = {asset.menu}
				onSelection={handleMenu}/>

			{/*<AppManager
				apps={apps}
				Component={Component}
				state={state}
				style={style}
				asset={asset}
				event={event}
				onUpdate={(data,id) => onUpdate && onUpdate(data,id)} />*/}
		</div>
	)
}

export default View