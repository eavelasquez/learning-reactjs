import Pulse from './pulse.js'

function App (props) {
  return Pulse.createElement(
    'div',
    null,
    Pulse.createElement(
      'h1',
      {
        style: 'color: tomato; text-decoration: underline'
      },
      `Hello, ${props.name}`
    ),
    Pulse.createElement(
      'h2',
      {
        style: 'text-align: right'
      },
      'from Pulse.js!'
    )
  )
}

const element = Pulse.createElement(App, { name: 'World' })
const container = document.getElementById('root')

Pulse.render(element, container)
