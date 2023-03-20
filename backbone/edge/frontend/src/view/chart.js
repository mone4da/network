import {useState} from 'react'

let Regions = ({Component, state, onSelection, onDragging}) => {
	let list = state.system.flags

	let handleSelection = id => {
		onSelection && onSelection(id)
	}

	let handleDragging = (id, p) => {
		onDragging && onDragging( id, p.x + 20, p.y + 20 )
	}

	return <>
			{list.map(
				item => <Component.Icon
						onDragging={p => handleDragging(item.id,p)}
						{...item}
						area={{fill: item.id === state.system.region ? 'red' : 'black'}}
						onSelected={() => handleSelection(item.id)}/>
			)}
		</>
}

let Links = ({Component, data}) => {
	return <>
			{ data.map(item => <Component.Link  a={item.a} b={item.b} />) }
		</>
}

let Chart = props => {
	const Component = props.Component
	const state = props.state

	let [data, setData]  = useState([
		{a:{id: 'us', x: 0, y: 0}, b:{id:'gb', x:0, y: 0}},
		{a:{id: 'de', x: 0, y: 0}, b:{id: 'sg', x:0, y: 0}},
		{a:{id:'sg', x: 0, y: 0}, b:{id: 'au', x:0, y: 0}}
		])

	let handleDragging = (id,x,y) => {
		setData(data => data.map(item =>
				item.a.id === id && ({a:{id,x,y}, b:item.b}) ||
				item.b.id === id && ({a:item.a, b:{id,x,y}}) ||
				item) )
	}

	let handleSelection = id => {
		props.onSelection && props.onSelection(id)
	}

	return <svg width='100%' height='100%'>
			<Links
				Component={Component}
				data={data} />
			<Regions
				Component={Component}
				state={state}
				onSelection={handleSelection}
				onDragging={handleDragging}/>
		</svg>
}

export default Chart
