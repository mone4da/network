import Component from './component'

let style = {
	display: 'flex',
	height: '100%'
}

let View = props => {
	return (
		<div style={style}>
			<Component.Icon />
		</div>
	)
}

export default View
