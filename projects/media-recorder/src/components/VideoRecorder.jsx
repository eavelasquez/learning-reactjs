import { useRef, useState } from 'react'

const mimeType = 'video/webm; codecs="opus,vp8"'

export const VideoRecorder = () => {
  const [permission, setPermission] = useState(false)
  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [stream, setStream] = useState(null)
  const [video, setVideo] = useState(null)
  const [videoChunks, setVideoChunks] = useState([])
  const liveVideoFeed = useRef(null)
  const mediaRecorder = useRef(null)

  const getCameraPermission = async () => {
    setVideo(null)
    // Get video and audio permissions and then stream the result media stream to the videoSrc variable
    if ('MediaRecorder' in window) {
      try {
        // Create audio and video streams separately
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        })
        const videoStream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true
        })
        setPermission(true)

        // Merge both audio and video streams
        const streamData = new window.MediaStream([
          ...audioStream.getAudioTracks(),
          ...videoStream.getVideoTracks()
        ])
        setStream(streamData)

        // Set video stream to live feed player
        liveVideoFeed.current.srcObject = videoStream
      } catch (error) {
        window.alert(error.message)
      }
    } else {
      window.alert('The MediaRecorder API is not supported in your browser.')
    }
  }

  const startRecording = () => {
    setRecordingStatus('recording')
    const media = new window.MediaRecorder(stream, { mimeType })
    mediaRecorder.current = media
    mediaRecorder.current.start()

    const chunks = []
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === 'undefined') return
      if (event.data.size === 0) return
      chunks.push(event.data)
    }
    setVideoChunks(chunks)
  }

  const stopRecording = () => {
    setPermission(false)
    setRecordingStatus('inactive')
    mediaRecorder.current.stop()

    mediaRecorder.current.onstop = () => {
      const videoBlob = new window.Blob(videoChunks, { type: mimeType })
      const videoUrl = URL.createObjectURL(videoBlob)
      setVideo(videoUrl)
      setVideoChunks([])
    }
  }

  return (
    <div>
      <h2>Video Recorder</h2>
      <main>
        <div className='video-controls'>
          {!permission
            ? (
              <button type='button' onClick={getCameraPermission}>
                Get Camera Permission
              </button>
              )
            : null}

          {permission && recordingStatus === 'inactive'
            ? (
              <button type='button' onClick={startRecording}>
                Start Recording
              </button>
              )
            : null}

          {permission && recordingStatus === 'recording'
            ? (
              <button type='button' onClick={stopRecording}>
                Stop Recording
              </button>
              )
            : null}
        </div>
      </main>

      <div className='video-player'>
        {!video
          ? (
            <video ref={liveVideoFeed} autoPlay className='live-player' />
            )
          : null}

        {video
          ? (
            <div className='recorded-player'>
              <video src={video} autoPlay controls className='recorded' />
              <a href={video} download='video.webm'>
                Download Video
              </a>
            </div>
            )
          : null}
      </div>
    </div>
  )
}
