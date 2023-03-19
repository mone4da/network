
import {useState} from 'react'

let App = props => {
	let View = props.View

	let [state, setState] = useState(props.model.state)
	return (
		<View state={state} />
	)
}

export default App
