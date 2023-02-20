import { useState } from 'react'

import { AudioRecorder, VideoRecorder } from './components'

function App () {
  const [recordOption, setRecordOption] = useState('audio')

  const toggleRecordOption = (option) => () => setRecordOption(option)

  return (
    <>
      <h1>Media Recorder</h1>
      <div className='button-flex'>
        <button type='button' onClick={toggleRecordOption('audio')}>
          Audio Recorder
        </button>
        <button type='button' onClick={toggleRecordOption('video')}>
          Video Recorder
        </button>

        {recordOption === 'audio' ? <AudioRecorder /> : <VideoRecorder />}
      </div>
    </>
  )
}

export default App
