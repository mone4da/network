
const Info = props => {
	let Component = props.Component

	let data = Object.entries( props.event.data ).map(entry => entry[1].in)

	return <div style={props.style}>
			<div>
				Stats about {props.region}
			</div>
			<svg width='500' height='500'>
				{	data !== '' &&
					data.length === 5 &&
					<Component.Bars
						data = {data}
						width='500'
						height='500'
						max = '100'
					/>}
			</svg>
			<div style={{ display: 'grid', gridTemplateColumns: ' auto '.repeat(props.regions.length), width: '500px'}}>
				{props.regions.map(id => <div>{id}</div>)}
			</div>

		</div>
}

export default Info
