import ReactResizeDetector from 'react-resize-detector'

let Responsive = props => {
		let {style} = props
		return	<ReactResizeDetector handleWidth handleHeight>
				  {({width, height}) => width < height ? props.children[0] : props.children[1] }
			</ReactResizeDetector>
}

export {
	Responsive
}

//{({width, height}) => width < height ? props.children[0] : props.children[1] }
