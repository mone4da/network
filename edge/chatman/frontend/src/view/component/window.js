import {useState} from 'react'
import Draggable from 'react-draggable'

let Holder = props => {
	return <div style={{
				height: props.height,
				width: props.width,
				cursor: 'move',
				touchAction: 'none',
				backgroundImage: `url("${props.icon}")`,
				backgroundRepeat: 'no-repeat',
				backgroundColor: 'blue',
				pointerEvents: 'none'

			}} />
}

let Window = props => {
	let offset = props.offset || {x:0, y:0}

	let handleFocus = () => {
		props.onFocused && props.onFocused()
	}

	let handleStop = e => {
		props.onDragged && props.onDragged( {x: e.clientX - e.offsetX, y: e.clientY - e.offsetY} )
	}

	return	<Draggable
			defaultPosition={offset}
			onStop = {handleStop} >
			<div style={{
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',

			height: props.height || '200px',
			width: props.width || '400px',

			padding: '2px',

			border: 'solid black 1px',
			borderRadius: '2px',

			userSelect: 'none',
			backgroundColor: 'white'
			}}

			tabIndex={props.tabIndex || 0}
			onFocus={handleFocus}>
				<Holder
					icon={props.icon}
					width={(props.grabber && props.grabber.width) || '30px'}
					height={props.height || '200px'} />

				{props.children}
			</div>
		</Draggable>

}

export {
	Window
}
