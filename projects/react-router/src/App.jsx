import { useEffect, useState } from 'react'

import { AboutPage, HomePage } from './pages'
import { EVENTS } from './utils/consts'

const { POPSTATE, PUSHSTATE } = EVENTS

export function navigate (href) {
  window.history.pushState({}, '', href)
  const event = new Event(PUSHSTATE)
  window.dispatchEvent(event)
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
