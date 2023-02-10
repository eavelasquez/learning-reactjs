import { useEffect, useState } from 'react'

const MouseFollower = ({ enabled }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const style = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: '1px solid #fff',
    borderRadius: '50%',
    opacity: 0.8,
    pointerEvents: 'none',
    left: -25,
    top: -25,
    width: 50,
    height: 50,
    transform: `translate(${position.x}px, ${position.y}px)`
  }

  // useEffect is a hook that runs a function when the component is mounted
  // and when the component is updated
  // [] means that the effect will only run once
  // [enabled] means that the effect will run when the 'enabled' state changes
  // undefined means that the effect will run every time the component is updated
  useEffect(() => {
    const handlePointerMove = (e) => setPosition({ x: e.clientX, y: e.clientY })

    // add the event listener when the component is mounted
    if (enabled) {
      window.addEventListener('pointermove', handlePointerMove)
    }

    // cleanup function to remove the event listener
    // when the component is unmounted (or when the effect is re-run)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
    }
  }, [enabled])

  useEffect(() => {
    // toggle the 'no-cursor' class on the body element
    document.body.classList.toggle('no-cursor', enabled)

    // cleanup function to remove the class when the component is unmounted
    // or when the effect is re-run
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return enabled ? <div style={style} /> : null
}

function App () {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <MouseFollower enabled={enabled} />
      <h1>Mouse Follower</h1>
      <p>Move your mouse around the screen to see the effect.</p>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Disable' : 'Enable'} mouse follower
      </button>
    </>
  )
}

export default App
