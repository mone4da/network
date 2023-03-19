import Component from './component'
import Chart from './chart'

let style = {
	view: {
		display: 'flex',
		height: '100%'
	},

	chart: {
		display: 'flex',
		height: '100%',
	}
}

let View = props => {
	return (
		<div style={style.view}>
			<Chart
				state={props.state}
				Component={Component}
				style={style.chart} />
		</div>
	)
}

export default View
