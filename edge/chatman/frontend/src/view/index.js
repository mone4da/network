import Component from './component'

import {useState} from 'react'

import {
	Header,
	Communication,
	Organisation} from './content'

import style from './style'
import asset from './asset'

let Login = props => {
	let [accesskey, setAccesskey] = useState('')
	let [password, setPassword] = useState('')

	let handleSubmit = () => {
		props.onSubmit && props.onSubmit({ accesskey, password, address: accesskey})
	}

	return <div style={{display: 'flex', flexDirection: 'column'}}>
			<input onChange={e => setAccesskey(e.target.value)} />
			<input onChange={e => setPassword(e.target.value)} />
			<button onClick={handleSubmit}>Login</button>
		</div>
}

let videoStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',

	borderRadius: '8px',
	overflow: 'hidden',
	transform: 'translateZ(0)',
	//boxSshadow: '0 19px 51px 0 rgba(0,0,0,0.16), 0 14px 19px 0 rgba(0,0,0,0.07)',

	width: '200px',
	height: '200px'
}

let View = props => {
	let {state, event, onUpdate} = props

	let handleLogin = data => {
		console.log('submit', data)
		onUpdate && onUpdate(data, 'signin')
	}

	return	event.source === 'edge-auth' && event.data.body === 'Welcome'
						? <div style={videoStyle}>
							<Component.Video style={{ width: '300px', height: '300px'}} />
						</div>
						: <Login onSubmit={handleLogin} />


	return (

		{/*<Component.Responsive>
				<Header
				style={style.header}
				asset={asset.header}
			/>

			<Communication
				style={style.communication}
				asset={asset.communication}
			/>

			<Organisation
				style={style.organisation}
				content={state.system.copyright}
			/>

		</Component.Responsive> */}
	)
}

export default View
