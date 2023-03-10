import Pulse from './pulse.js'

const element = Pulse.createElement(
  'div',
  null,
  Pulse.createElement(
    'h1',
    {
      style: 'color: tomato; text-decoration: underline'
    },
    Pulse.createTextElement('Hello, World')
  ),
  Pulse.createElement(
    'h2',
    {
      style: 'text-align: right'
    },
    Pulse.createTextElement('from Pulse.js!')
  )
)

const container = document.getElementById('root')

Pulse.render(element, container)
