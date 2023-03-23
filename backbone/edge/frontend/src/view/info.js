
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


const Info = props => {
	let Component = props.Component

	let BarChart = props => {
		let data = props.data
		let regions = props.regions

		return<div style={{display:'flex', flexDirection: 'column', padding: '2px 60px 2px 2px'}}>
			<svg width='200' height='200'>
				{	data !== '' &&
					data.length === 5 &&
					<Component.Bars
						data = {data}
						width='200'
						height='200'
						max = '100'
					/>}
			</svg>
			<div style={{ display: 'grid', gridTemplateColumns: ' auto '.repeat(regions.length), width: '200px'}}>
				{regions.map(item => <div>{item.id}</div>)}
			</div>
			</div>
	}

	let LineChart = props => {
		let data = props.data

		return<div style={{display:'flex', flexDirection: 'column', padding: '2px 60px 2px 2px'}}>
			<svg width='200' height='200'>
				{	data !== '' &&
					data.length >= 20 &&
					<Component.Lines
						data = {[0,...data,0]}
						width='200'
						height='200'
						max = '100'
					/>}
			</svg>
			</div>
	}


	let indata = Object.entries( props.event.data ).map(entry => entry[1].in)
	let outdata = Object.entries( props.event.data ).map(entry => entry[1].out)

	addRegionInData(props.region, Object.entries( props.event.data ), inregion)
	addRegionOutData(props.region, Object.entries( props.event.data ), outregion)

	return <div style={props.style}>
			<h3>Stats about {props.region}</h3>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<div style={{display: 'flex'}}>
					<LineChart data={inregion}/>
					<LineChart data={outregion} />
				</div>
				<div style={{display: 'flex'}}>
					<BarChart regions={props.regions} data={indata}/>
					<BarChart regions={props.regions} data={outdata} />
				</div>
			</div>
		</div>
}

export default Info
