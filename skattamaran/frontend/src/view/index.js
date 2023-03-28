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

	let handleMenu = type => {
		setAppTypes( list => list.indexOf(type) < 0 ? [...list,  {id: type, offset: {x: 100, y: 100}}] : list )
	}

	let handleFocused = (id, offset) => {
		setAppTypes(list => {
			//let last = list.find(item => item.id === id)
			return [...list.filter(data => data.id !== id), {id, offset}]
		})
	}

	let handleDragged = (id, offset) => {
		setAppTypes( list => list.map(data => data.id === id ? {id, offset} : data) )
	}

	let handleClose = id => {
		setAppTypes( list => list.filter(data => data.id !== id) )
	}


	return (
		<div style={style}>
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
				onDragged={handleDragged}
				onClose={handleClose}/>

			<Menu
				Component={Component}
				asset = {asset.menu}
				onSelection={handleMenu} />
		</div>
	)
}

export default View
