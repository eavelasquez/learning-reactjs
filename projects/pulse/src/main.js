import Pulse from './pulse.js'

const element = Pulse.createElement(
  'div',
  { id: 'foo' },
  Pulse.createElement('a', null, 'bar'),
  Pulse.createElement('b')
)

const container = document.getElementById('root')

Pulse.render(element, container)
