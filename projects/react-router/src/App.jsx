import { useEffect, useState } from 'react'

import { EVENTS } from './utils/consts'

const { POPSTATE, PUSHSTATE } = EVENTS

function navigate (href) {
  window.history.pushState({}, '', href)
  const event = new Event(PUSHSTATE)
  window.dispatchEvent(event)
}

function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page of the React Router</p>
      <button onClick={() => navigate('/about')}>Go to about page</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1580945539700506627/lb7Kxuu4_400x400.jpg' alt='eavelasquez73 photo' />
        <p>Hi! My name is Alexander and I'm creating this clone of React Router</p>
      </div>
      <button onClick={() => navigate('/')}>Go to home page</button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(PUSHSTATE, onLocationChange)
    window.addEventListener(POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(PUSHSTATE, onLocationChange)
      window.removeEventListener(POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
