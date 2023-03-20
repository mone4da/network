
const Link = props => {
	let {a,b} = props

	return <line x1={a.x} y1={a.y}  x2={b.x} y2={b.y} stroke='gray'/>
}

export {
	Link
}
