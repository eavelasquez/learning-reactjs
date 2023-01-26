import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = () => {
    refreshRandomFact()
  }

  return (
    <main className='App'>
      <h1>Kitty App</h1>
      <button onClick={handleClick}>Get a new fact</button>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
