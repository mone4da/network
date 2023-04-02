
const Footer = props => {
	let style = props.style
	let state = props.state
	return <div style={style}>
			<small>{state.system.copyright}</small>
		</div>
}


export default Footer
