/*import Appbar from './appbar'
import Search from './search'
import Connection from './connection'
import Whiteboard from './whiteboard'*/

let AppManager = props => {
	let {
		Component,
		state,
		asset,style,
		onUpdate,
		event} = props

	return	<>
			{/*state.user.apps.map( data =>
				<Component.App
					data = {data}
					Component={Component}
					state={state}
					style={style}
					asset={asset}
					event={event}

					onUpdate={data => onUpdate && onUpdate(data)} />)
			*/}
		</>

}

export default  AppManager