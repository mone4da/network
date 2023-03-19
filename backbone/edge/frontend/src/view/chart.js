
let Chart = props => {
	const Component = props.Component
	const style = props.style
	const state = props.state

	let handleSelection = id => {
		console.log(id)
		props.onSelection && props.onSelection(id)
	}

	return <svg width='100%' height='100%'>
			{state.system.flags.map(
				flag => <Component.Icon
						{...flag}
						area={{fill: flag.id == state.system.region ? 'red' : 'black'}}
						onSelected={() => handleSelection(flag.id)}/>
			)}
		</svg>
}

export default Chart
