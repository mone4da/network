import {useState} from 'react'

import Component from './component'

import Menu from './menu'

import AppManager from './appmanager'

import style from './style'
import asset from './asset'

let View = props => {
	let {state, event, onUpdate} = props

	let [appTypes, setAppTypes] = useState(state.user.apps)

	let handleMenu = type => {
		setAppTypes(list => list.indexOf(type) < 0 ? [...list, type] : list)
	}

	return (
		<div style={style}>
			<Menu
				Component={Component}
				asset = {asset.menu}
				onSelection={handleMenu} />

			<AppManager
				types={appTypes}
				Component={Component}
				state={state}
				style={style}
				asset={asset}
				event={event}
				onUpdate={(data,id) => onUpdate && onUpdate(data,id)} />
		</div>
	)
}

export default View


/*switch(type){
	case 'app': setApps(apps => apps.indexOf(type) < 0 ? [...apps,  <AppRoom Component={Component} asset = {asset.approom} />] : apps); break;
	case 'component': setApps(apps => apps.indexOf(type) < 0 ? [... apps,  <ComponentRoom Component={Component} asset = {asset.componentroom} />] : apps); break;
	case 'studio': setApps(apps => apps.indexOf(type) < 0 ? [...apps,  <Studio Component={Component} asset = {asset.studio} />] : apps); break;
}*/
