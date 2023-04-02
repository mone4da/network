
import ReactResizeDetector from 'react-resize-detector'

const style = {
	H: {
		display: 'grid',
		gridTemplateColumns: '50% auto',
		width: '100%',
		height: '100%'
	},
	V: {
		display: 'grid',
		gridTemplateRows: '50% auto',
		width: '100%',
		height: '100%'
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
	return	<ReactResizeDetector handleHeight handleWidth >
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
