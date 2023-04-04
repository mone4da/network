import Component from './component'

import {
	Header,
	Communication,
	Organisation} from './content'

import style from './style'
import asset from './asset'

let View = props => {
	let {state, event, onUpdate} = props

	return (
		<Component.Responsive>
			<div style={style}>Horizontal</div>
			<div style={style}>Vertical</div>

			{/*
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
			/>*/}

		</Component.Responsive>
	)
}

export default View
