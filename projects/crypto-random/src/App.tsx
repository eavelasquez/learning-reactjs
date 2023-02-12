import { useEffect, useReducer, useState } from 'react'

import './App.css'

const getRandomNumber = async (): Promise<number> => {
  const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
  const text = await response.text()
  return parseInt(text)
}

export const App = () => {
  const [number, setNumber] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [key, forceRefresh] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    setIsLoading(true)
    setError('')
    const fetchNumber = async () => {
      try {
        const number = await getRandomNumber()
        setNumber(number)
      } catch (error: any) {
        setError(error.message)
      }
    }

    fetchNumber()
  }, [key])

  useEffect(() => {
    if (number) setIsLoading(false)
  }, [number])

  useEffect(() => {
    if (error) setIsLoading(false)
  }, [error])

  return (
    <div className="App App-header">
      <h1>Crypto Random</h1>

      {isLoading ? <p>Loading...</p> : !error && <p>Random Number: {number}</p>}
      {!isLoading && error && <p>Something went wrong: {error}</p>}

      <button type='button' onClick={forceRefresh} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Random Number'}
      </button>
    </div>
  )
}
