import Component from './component'

import {
	Header,
	Communication,
	Organisation} from './content'

import style from './style'
import asset from './asset'

let videoStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	borderRadius: '8px',
	overflow: 'hidden',
	transform: 'translateZ(0)',
	//boxSshadow: '0 19px 51px 0 rgba(0,0,0,0.16), 0 14px 19px 0 rgba(0,0,0,0.07)',

	width: '200px',
	height: '200px'
}

let View = props => {
	let {state, event, onUpdate} = props

	return	<div style={videoStyle}> <Component.Video style={{ width: '300px', height: '300px'}} /></div>


	return (

		{/*<Component.Responsive>
				<Header
				style={style.header}
				asset={asset.header}
			/>

			<Communication
				style={style.communication}
				asset={asset.communication}
			/>

			<Organisation
				style={style.organisation}
				content={state.system.copyright}
			/>

		</Component.Responsive> */}
	)
}

export default View
