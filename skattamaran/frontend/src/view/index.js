import {useState} from 'react'

import Component from './component'
import Menu from './menu'
import AppManager from './appmanager'
import {Copyright} from './organisation'

import style from './style'
import asset from './asset'

let View = props => {
	let {state, event, onUpdate} = props

	let [appTypes, setAppTypes] = useState(state.user.apps)
	let [showMenu, setShowMenu] = useState(true)

	let handleMenu = type => {
		setAppTypes( list => list.indexOf(type) < 0 ? [...list,  type] : list )
	}

	let handleShowMenu = visible => {
		setShowMenu(visible => !visible)
	}

	let handleFocused = id => {
		setAppTypes(list =>  [...list.filter(type => type !== id), id] )
	}


	let handleClose = id => {
		setAppTypes( list => list.filter(type => type !== id) )
	}


	return (
		<div style={style} onClick={() => handleShowMenu(true)}>
			<Copyright
				style={style.organisation.copyright}
				content={state.system.copyright}
			/>

			<AppManager
				types={appTypes}
				Component={Component}
				state={state}
				style={style}
				asset={asset}
				event={event}
				onUpdate={(data,id) => onUpdate && onUpdate(data,id)}
				onFocused={handleFocused}
				onClose={handleClose}/>

			<Menu
				visible={showMenu}
				Component={Component}
				asset = {asset.menu}
				onSelection={handleMenu} />
		</div>
	)
}

export default View
