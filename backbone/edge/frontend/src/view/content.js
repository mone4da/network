import {useState} from 'react'

import Component from './component'
import Chart from './chart'
import Info from './info'

const Content = props => {
	let style = props.style
	let state = props.state

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
						region={selection}
						state={state}
						style={style.info}/>
				</Component.Splitter>
	</div>
}


export default Content
