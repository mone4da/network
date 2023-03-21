
import ReactResizeDetector from 'react-resize-detector'

const style = {
	H: {
		display: 'flex',
		flexDirection: 'row',
		height: '100%',
		background: 'yellow'
	},
	V: {
		display : 'flex',
		flexDirection: 'column',
		height: '100%',
		background: 'orange'
	}
}

const HSplitter = props => {
	return <div style={style.H}>
			{props.children}
		</div>
}


const VSplitter = props => {
	return <div style={style.V}>
			{props.children}
		</div>
}

const Splitter = props => {

	 return 
		<ReactResizeDetector handleHeight handleWidth >
			{
				({ width, height }) => width > height 	? <HSplitter>{props.children}</HSplitter>
									: <VSplitter>{props.children}</VSplitter>
			}
		</ReactResizeDetector>
}

export {
	HSplitter,
	VSplitter,
	Splitter
}
