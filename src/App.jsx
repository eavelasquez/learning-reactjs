import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_RANDOM_IMAGE = 'https://cataas.com/cat/says'

export function App() {
  const [fact, setFact] = useState('')
  const [image, setImage] = useState('')

  // This useEffect is used to fetch a random fact
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then(({ fact }) => setFact(fact))
      .catch((err) => console.error(err))
  }, [])

  // This useEffect is used to fetch a random image using the first three words of the fact
  useEffect(() => {
    if (!fact) return

    const firstWordOfFact = fact.split(' ', 3).join(' ')
    const encodedWord = encodeURIComponent(firstWordOfFact)

    fetch(`${CAT_ENDPOINT_RANDOM_IMAGE}/${encodedWord}`)
      .then((res) => res.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob)
        setImage(url)
      })
      .catch((err) => console.error(err))
  }, [fact])

  const handleClick = async () => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then(({ fact }) => setFact(fact))
      .catch((err) => console.error(err))
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