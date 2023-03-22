
const Bar = props => {
	let {x,y,w,h} = props
	return <rect 
		x={x}
		y={y}
		width={w}
		height={h}
		fill='blue'
	/>
}

const Bars = props => {
	let data = props.data
	let xscale = props.width / data.length
	let yscale = props.height / props.max
	let barWidth = xscale - 10
	return <svg>
			{data.map(
				(value,i) => <Bar x={i * xscale} y={props.height - value * yscale}  h = {value * yscale}  w = {barWidth} />
			)}
		</svg>
}


export {
	Bars
}
