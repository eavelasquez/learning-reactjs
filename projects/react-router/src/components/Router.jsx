import { Children, useEffect, useState } from 'react'

import { EVENTS } from '../utils/consts'
import { getCurrentPath } from '../utils/helpers'
import { match } from 'path-to-regexp'

const { POPSTATE, PUSHSTATE } = EVENTS

export function Router ({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>
}) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(PUSHSTATE, onLocationChange)
    window.addEventListener(POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(PUSHSTATE, onLocationChange)
      window.removeEventListener(POPSTATE, onLocationChange)
    }
  }, [])

  // add the children routes to the routes array
  // const routesFromChildren = Children.map((children), ({ props }) => props)
  const routesFromChildren = Children.map(children, (child) => {
    const { type, props } = child
    return type.name === 'Route' ? props : null
  })

  // concat the routes array with the children routes
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  // we use this object to save the params of the dynamic routes
  let routeParams = {}
  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    // path-to-regexp - to match dynamic routes like /search/:query
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    // if the route is dynamic, we save the params in routeParams
    // e.g. matched.params = { query: 'react' }
    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page {...routeParams} /> : <DefaultComponent />
}
