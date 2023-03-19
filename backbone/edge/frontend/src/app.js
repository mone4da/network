
import {useState} from 'react'

let App = props => {
	let model = props.model
	let View = props.View

	let [state, setState] = useState(model.state)
	return (
		<View state={state} />
	)
}

export default App
