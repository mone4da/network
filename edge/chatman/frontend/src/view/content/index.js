
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
	return <div style={style}>message</div>
}

let Communication = props => {
	let {style} = props
	return <div style={style}>
			<Video style={style.video} />
			<Message style={style.message} />
		</div>
}

let Organisation = props => {
	let {style, content} = props

	return <div style={style}>
			<div style={style.copyright}>{content}</div>
		</div>
}

export {Header, Communication, Organisation}
