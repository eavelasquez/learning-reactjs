import { useEffect, useState } from 'react'
import './App.css'

import { getRamdomFact } from './services/facts'

export function App() {
  const [fact, setFact] = useState('')
  const { image } = useCatImage({ fact })

  // This useEffect is used to fetch a random fact
  useEffect(() => {
    getRamdomFact().then((fact) => setFact(fact))
  }, [])

  const handleClick = async () => {
    const newFact = await getRamdomFact()
    setFact(newFact)
  }

  return (
    <main className="App">
      <h1>Kitty App</h1>
      <button onClick={handleClick}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
