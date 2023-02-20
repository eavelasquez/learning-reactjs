import { useState } from 'react'

export const AudioRecorder = () => {
  const [permission, setPermission] = useState(false)
  const [stream, setStream] = useState(null)

  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
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
      <h2>Audio Recorder</h2>
      <main>
        <div className='audio-controls'>
          {!permission
            ? (
              <button type='button' onClick={getMicrophonePermission}>
                Get Microphone Permission
              </button>
              )
            : null}

          {permission
            ? (
              <button type='button'>
                Start Recording
              </button>
              )
            : null}
        </div>
      </main>
    </div>
  )
}
