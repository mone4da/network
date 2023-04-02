
let inregion = [...Array(20)].map(_ => 0)
let outregion = [...Array(20)].map(_ => 0)

let addRegionInData = (region, source, data) => {
	try{
		let item = source.find(item => item[0] === region)
		if (item){
			data.unshift(item[1].in)
			data.pop()
		}
	}
	catch(e){console.log(e)}
}

let addRegionOutData = (region, source, data) => {
	try{
		let item = source.find(item => item[0] === region)
		if (item){
			data.unshift(item[1].out)
			data.pop()
		}

	}catch(e){}
}

let style = {
	label: {
		display: 'flex',
		justifyContent: 'center',
		fontWeight:'bold',
		fontSize: '.4em',
		margin: '16px'
	},

	bigLabel: {
		display: 'flex',
		justifyContent: 'center',
		fontWeight:'bold',
		fontSize: '.8em',
		margin: '16px'
	},

	copyright:{
		fontWeight:'bold',
		fontSize: '.4em',
		padding: '10px 0 10px 0'
	 },

	link: {
		textDecoration: 'underline',
		color: 'inherit',
		outline: 0,
		cursor: 'pointer'
	}

}



const Info = props => {
	console.log( props.region )
	let Component = props.Component

	let BarChart = props => {
		let data = props.data
		let regions = props.regions

		return<div style={{display:'flex', flexDirection: 'column', padding: '2px 60px 2px 2px'}}>
				<svg width='100' height='100'>
					{	data !== '' &&
						data.length === 5 &&
						<Component.Bars
							data = {data}
							width='100'
							height='100'
							max = '100'
						/>}
				</svg>
				<div style={{ display: 'grid', gridTemplateColumns: ' auto '.repeat(regions.length), width: '100px'}}>
					{regions.map(item => <div style={{fontSize: '.3em'}}>{item.id}</div>)}
				</div>
				<div style={style.label}><label>{props.label}</label></div>
			</div>
	}

	let LineChart = props => {
		let data = props.data

		return<div style={{display:'flex', flexDirection: 'column', padding: '2px 60px 2px 2px'}}>
			<svg width='100' height='100'>
				{	data !== '' &&
					data.length >= 20 &&
					<Component.Lines
						data = {[0,...data,0]}
						width='100'
						height='100'
						max = '100'
					/>}
			</svg>
			</div>
	}


	let indata = Object.entries( props.event.data ).map(entry => entry[1].in)
	let outdata = Object.entries( props.event.data ).map(entry => entry[1].out)

	addRegionInData(props.region.id, Object.entries( props.event.data ), inregion)
	addRegionOutData(props.region.id, Object.entries( props.event.data ), outregion)

	return <div style={props.style}>

			<div style={style.bigLabel}><a style={style.link} href={props.region.location}>{props.region.name.toUpperCase()}</a></div>

			<div style={{display: 'flex', flexDirection: 'column'}}>
				<div style={{display: 'flex'}}>
					<LineChart data={inregion}/>
					<LineChart data={outregion} />
				</div>

				<div style={style.bigLabel}>GLOBAL</div>

				<div style={{display: 'flex'}}>
					<BarChart regions={props.regions} data={indata}  label='Traffic In'/>
					<BarChart regions={props.regions} data={outdata} label='Traffic Out' />
				</div>

			</div>

			<div style={style.copyright}>{props.state.system.copyright}</div>
		</div>
}

export default Info
