
import {useState} from 'react'

let App = props => {
	let View = props.View

	let [state, setState] = useState(props.model.state)

	let handleUpdate = data => {
		setState(state => data)
	}

	return (
		<View
			state={state}
			onUpdate = {handleUpdate}/>
	)
}

export default App
