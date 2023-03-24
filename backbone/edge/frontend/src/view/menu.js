
let style = {
	display : 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	height: '30px',
	fontSize: '.3em',
	margin: '4px',

	image : {
		width: '30px',
		cursor: 'pointer'
	}
}

let Menu = props => {
	let regions = props.regions

	let handleSelection = id => {
		props.onSelection && props.onSelection(id)
	}

	return <div style={style}>
			{regions.map(item => <img style={style.image} src={item.url} onClick={e => handleSelection(item.id)} alt={item.id} />)}
		</div>
}

export default Menu
