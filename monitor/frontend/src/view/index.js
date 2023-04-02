import Component from './component'
import Header from './header'
import Content from './content'

import style from './style'
import asset from './asset'

let View = props => {
	let state = props.state
	let event = props.event

	return (
		<div style={style}>
			<Header
				Component={Component}
				style={style.header}
				state={state}
				asset={asset.header} />

			<Content
				Component={Component}
				style={style.content}
				state={state}
				event={event}/>
		</div>
	)
}

export default View
