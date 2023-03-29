import Component from './component'
import {Copyright} from './organisation'
import Content from './content'

import style from './style'
import asset from './asset'

let View = props => {
	let {state, event, onUpdate} = props

	return (
		<div style={style}>
			<Copyright
				style={style.organisation.copyright}
				content={state.system.copyright}
			/>

			<Content
				style={style.content}
				asset={asset.content}
			/>

		</div>
	)
}

export default View
