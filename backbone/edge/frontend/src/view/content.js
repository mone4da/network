import {useState} from 'react'

import Chart from './chart'
import Info from './info'

const Content = props => {
	let Component = props.Component
	let style = props.style
	let state = props.state
	let event = props.event

	let [selection, setSelection] = useState(state.system.region)
	let handleSelection = data => {
		setSelection(data)
	}

	return <div style={style}>
			<Component.Splitter>
					<Chart
						state={state}
						Component={Component}
						style={style.chart}
						onSelection={handleSelection}/>

					<Info
						Component={Component}
						region={selection}
						regions={state.system.regions.map(item => ({id: item.id, name: item.name}))}
						state={state}
						style={style.info}
						event={event}/>
				</Component.Splitter>
	</div>
}


export default Content
