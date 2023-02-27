import { useEffect } from 'react'
import { useState } from 'react'
import { EVENTS } from './constants'

function navigate (href) {
  window.history.pushState({}, '', href)
  const event = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(event)
}

function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <a href='/about'>Go to about page</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img src='https://placekitten.com/200/300' alt='kitten' />
        <p>This is the about page</p>
      </div>
      <button onClick={() => navigate('/')}>Go to home page</button>
    </>
  )
}

function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPage(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(NAVIGATION_PUSH_EVENT, onLocationChange)
      window.removeEventListener(NAVIGATION_POP_EVENT, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPage === '/' && <HomePage />}
      {currentPage === '/about' && <AboutPage />}
    </main>
  )
}

export default App
