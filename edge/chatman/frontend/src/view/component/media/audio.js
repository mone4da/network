/*
this.audioCtx = new AudioContext();
    this.audioCtx.audioWorklet.addModule(`/pcmWorker.js`)
      // then create a new MediaStreamAudioSourceNode
      .then(() => this.audioCtx.createMediaStreamSource(localStream))
      // then create a new AudioWorkletNode
      .then((mediaStreamAudioSourceNode) => {
        this.pcmWorker = new AudioWorkletNode(this.audioCtx, 'pcm-worker', { outputChannelCount: [1] });
        mediaStreamAudioSourceNode
          .connect(this.pcmWorker)
          .connect(this.audioCtx.destination)
      })
      .catch(e => {
        console.error(e);
      });


*/

// https://copyprogramming.com/howto/javascript-get-mediadevice-video-stream-frame?utm_content=cmp-true
//https://codesandbox.io/s/p6l8l

import useUserMedia from './usermedia'

const Audio = props => {
	const { stream, error } = useUserMedia({ audio: true, video: false })

	let handleStream = stream => {
		console.log( stream && stream.getAudioTracks() )
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

export default Audio

