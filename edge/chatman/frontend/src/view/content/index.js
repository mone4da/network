
let Header = props => {
	let {style} = props
	return <div style={style}>header</div>
}

let Video = props => {
	let {style} = props
	return <div style={style}>video</div>
}

let Message = props => {
	let {style} = props
	return <div>message</div>
}

let Organisation = props => {
	let {style, content} = props

	return <div style={style}>
			<div style={style.copyright}>{content}</div>
		</div>
}

export {Header, Video, Message, Organisation}
