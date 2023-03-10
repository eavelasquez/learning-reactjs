import Pulse from './pulse.js'

function Counter () {
  const [count, setCount] = Pulse.useState(0)

  return (
    <div className='card'>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  )
}

/** @jsx Pulse.createElement */
function App () {
  return (
    <div>
      <h1>Pulse</h1>
      <Counter />
    </div>
  )
}

const element = Pulse.createElement(App, {}, null)
const container = document.getElementById('root')

// eslint-disable-next-line react/no-deprecated
Pulse.render(element, container)
