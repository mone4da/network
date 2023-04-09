
// https://copyprogramming.com/howto/javascript-get-mediadevice-video-stream-frame?utm_content=cmp-true
//https://codesandbox.io/s/p6l8l

import useUserMedia from './usermedia'

const Video = props => {
	const { stream, error } = useUserMedia({ audio: props.audio, video: props.video || true})

	let handleStream = stream => {
		console.log( stream && stream.getVideoTracks() )
	}

	return error	? <p>{error}</p>
			: <video
				style={props.style}
				autoPlay
				ref={ video => {
					if (video){
						video.srcObject = stream
						handleStream( stream )
					}
				}} >
			</video>
}

export default Video
