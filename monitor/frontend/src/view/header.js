
const Logo = ({style, image}) => {
	return <div style={style}>
			<img style={style.image} src={image.url} alt={image.alt} />
		</div>
}

const Legend = ({style, image}) => {
	return <div style={style}>
			<img style={style.image} src={image.url} alt={image.name} />
		</div>
}


const Header = props => {
	let style = props.style
	let asset = props.asset

	let image = props.state.system.regions.find(item => item.id === props.state.system.region)

	return <div style={style}>
			<Logo style={style.logo} image={asset.logo} />

			<label>4 Digital Asset</label>

			<Legend style={style.legend} image={image} />
		</div>
}


export default Header
