import {useState} from 'react'

let Holder = props => {
	let [po, setPo] = useState({x:0, y:0})
	let [position, setPosition] = useState(props.offset || { x: 0, y: 0 })
	let [dragging, setDragging] = useState(false)

	let handleReady = (e, ok) => {
		setDragging(ok)
		ok && setPo({x: e.clientX, y: e.clientY})
	}

	let drag = e => {
		let d = {x: e.clientX - po.x, y: e.clientY - po.y}
		setPosition( p => ({x: p.x + d.x, y: p.y + d.y }) )
		setPo({x: e.clientX, y: e.clientY})

		props.onDragging && (d.x !== 0 || d.y !== 0) && props.onDragging(position)
	}

	let touchDrag = e => {
		e.preventDefault()
		drag(e.touches[0])
	}


	return <div 	style={{
				height: props.height,
				width: props.width,
				cursor: 'move',
				touchAction: 'none',
				backgroundImage: `url("${props.icon}")`,
				backgroundRepeat: 'no-repeat',
				backgroundColor: 'blue'
			}}

			onMouseDown={e => handleReady(e, true)}
			onMouseUp={e => handleReady(e, false)}
			onMouseLeave={e=> dragging && handleReady(e ,false)}
			onMouseMove={e => dragging && drag(e)}

			onTouchStart={e => handleReady(e.touches[0], true)}
			onTouchEnd={e => handleReady(e.touches[0], false)}
			onTouchMove={e => dragging && touchDrag(e)} />
}



const Window = props => {
	let [position, setPosition] = useState(props.offset || { x: 0, y: 0 })

	let handleDragging = position => {
		setPosition( position )
	}

	return <div style={
			{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			left: position.x,
			top: position.y,

			height: props.height || '200px',
			width: props.width || '400px',

			padding: '2px',

			border: 'solid black 1px',
			borderRadius: '2px',

			userSelect: 'none'
			}}>
			<Holder
				offset={position}
				icon={props.icon}
				width={(props.grabber && props.grabber.width) || '30px'}
				height={props.height || '200px'}
				onDragging={handleDragging} />
			{props.children}

	</div>
}

export {
	Window
}
