import AppRoom from './approom'
import ComponentRoom from './componentroom'
import Studio from './studio'

let AppManager = props => {
	let {
		types,
		Component,
		state,
		asset,
		style,
		onUpdate,
		event} = props

	return (<>
		{types.map(name => {
			switch(name){
				case 'app' : return <AppRoom Component={Component} asset = {asset.approom} />;
				case 'component' : return <ComponentRoom Component={Component} asset = {asset.componentroom} />;
				case 'studio' : return <Studio Component={Component} asset = {asset.studio} />;
			}
		})}
		</>)


}

export default  AppManager
