
import {useState} from 'react'


let Icon = props => {
	let [po, setPo] = useState({x:0, y:0})
	let [position, setPosition] = useState(props.offset || { x: 0, y: 0 })
	let [dragging, setDragging] = useState(false)

	let handleReady = (e, ok) => {
		setDragging(ok)
		ok && setPo({x: e.clientX, y: e.clientY})
	}

	let drag = e => {
		setPosition( p => ({x: p.x + e.clientX - po.x, y: p.y + e.clientY - po.y }) )
		setPo({x: e.clientX, y: e.clientY})
	}

	return <svg
		width= '100%'
		height= '100%'
		style={{ cursor: dragging ? 'pointer' : 'default' }}
		onMouseDown={e => handleReady(e, true)}
		onMouseUp={e => handleReady(e, false)}
		onMouseLeave={e=> dragging && handleReady(e ,false)}
		onMouseMove={e => dragging && drag(e)} >
			<rect
				x={position.x}
				y={position.y}
				height={props.height || 40}
				width={props.width || 40}
				rx={props.rx || 10}
				fill={props.fill || 'orange'}
				stroke={props.stroke || 'black'} />
		</svg>
}


export {
	Icon
}
