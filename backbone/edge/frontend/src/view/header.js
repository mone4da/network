
const Logo = ({style, image}) => {
	return <div style={style}>
			<img style={style.image} src={image.url} alt={image.alt} />
		</div>
}

const Legend = ({style, image}) => {
	return <div style={style}>
			<img style={style.image} src={image.url} alt={image.alt} />
		</div>
}


const Header = props => {
	let style = props.style
	let asset = props.asset

	return <div style={style}>
			<Logo style={style.logo} image={asset.logo} />
			
			<label>4 Digital Asset</label>

			<Legend style={style.legend} image={asset.legend} />
		</div>
}


export default Header
