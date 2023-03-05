import { useEffect, useState } from 'react'

import { EVENTS } from './utils/consts'

const { POPSTATE, PUSHSTATE } = EVENTS

export function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
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

  const Page = routes.find(({ path }) => path === currentPath)?.Component
  return Page ? <Page /> : <DefaultComponent />
}
