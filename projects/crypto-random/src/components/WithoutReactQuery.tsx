import { useEffect, useReducer, useState } from 'react'

import { getRandomNumber } from '../services/random'

export const WithoutReactQuery = () => {
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
    <>
      {isLoading ? <p>Loading...</p> : !error && <p>Random Number: {number}</p>}
      {!isLoading && error && <p>Something went wrong: {error}</p>}

      <button type='button' onClick={forceRefresh} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get Random Number'}
      </button>
    </>
  )
}
