import { useState } from 'react'

export const VideoRecorder = () => {
  const [permission, setPermission] = useState(false)
  const [stream, setStream] = useState(null)

  const getCameraPermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true
        })

        setPermission(true)
        setStream(streamData)
      } catch (error) {
        window.alert(error.message)
      }
    } else {
      window.alert('The MediaRecorder API is not supported in your browser.')
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

          {permission
            ? (
              <button type='button'>Start Recording</button>
              )
            : null}
        </div>
      </main>
    </div>
  )
}
