import { useRef, useState } from 'react'

const mimeType = 'audio/webm'

export const AudioRecorder = () => {
  const [audio, setAudio] = useState(null)
  const [audioChunks, setAudioChunks] = useState([])
  const [permission, setPermission] = useState(false)
  const [recordingStatus, setRecordingStatus] = useState('inactive')
  const [stream, setStream] = useState(null)
  const mediaRecorder = useRef(null)

  const getMicrophonePermission = async () => {
    if ('MediaRecorder' in window) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        })
        setPermission(true)
        setStream(mediaStream)
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

    setAudioChunks(chunks)
  }

  const stopRecording = () => {
    setRecordingStatus('inactive')
    mediaRecorder.current.stop()

    mediaRecorder.current.onstop = () => {
      const audioBlob = new window.Blob(audioChunks, { type: mimeType })
      const audioUrl = URL.createObjectURL(audioBlob)
      setAudio(audioUrl)
      setAudioChunks([])
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

          {audio
            ? (
              <div className='audio-player'>
                <audio controls src={audio} />
                <a download={`audio-${Date.now()}.webm`} href={audio}>
                  Download Audio
                </a>
              </div>
              )
            : null}
        </div>
      </main>
    </div>
  )
}
