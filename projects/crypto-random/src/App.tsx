import { useEffect, useState } from 'react'

import './App.css'

const getRandomNumber = async (): Promise<number> => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const text = await response.text()
  return parseInt(text)
}

export const App = () => {
  const [number, setNumber] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const load = async () => {
      setNumber(await getRandomNumber())
    }
    load()
  }, [])

  useEffect(() => {
    if (number) setIsLoading(false)
  }, [number])

  return (
    <div className="App App-header">
      <h1>Crypto Random</h1>
      {isLoading ? <p>Loading...</p> : <p>Random number: {number}</p>}
      <button type='button' onClick={async () => setNumber(await getRandomNumber())}>Get Random Number</button>
    </div>
  )
}
