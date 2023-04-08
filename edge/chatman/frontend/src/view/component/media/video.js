
//https://codesandbox.io/s/p6l8l

import useUserMedia from './usermedia'

const Video = props => {
	const { stream, error } = useUserMedia({ audio: true, video: true })

	return error	? <p>{error}</p>
			: <video
				style={props.style}
				autoPlay
				ref={ video => {
					if (video)
						video.srcObject = stream
				}} >
			</video>
}

export default Video
