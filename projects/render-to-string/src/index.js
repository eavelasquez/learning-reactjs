import { createElement } from 'react'
import { renderToString } from 'react-dom/server'

export const App = () => createElement('h1', null, 'Hello, World!')

const html = renderToString(createElement(App))
console.log(html)
