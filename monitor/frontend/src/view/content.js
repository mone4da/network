import {useState} from 'react'

import Menu from './menu'
import Info from './info'

const Content = props => {
	let Component = props.Component
	let style = props.style
	let state = props.state
	let event = props.event

	let regions = state.system.regions

	let [selection, setSelection] = useState(state.system.region)
	let handleSelection = data => {
		setSelection(data)
	}

	return <div style={style}>
			<Menu
				regions = {regions}
				onSelection = {handleSelection}
			/>

			<Info
				Component={Component}
				region={regions.find(item => item.id === selection)}
				regions={regions}
				state={state}
				style={style.info}
				event={event}/>
	</div>
}


export default Content
