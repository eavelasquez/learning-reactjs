import { useState, useEffect } from 'react'
import { getCharacters } from '../services/rick-and-morty'

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCharacters(url)
      .then((characters) => setCharacters(characters))
      .finally(() => setIsLoading(false))
  }, [url])

  return { characters, isLoading }
}

export default useCharacters
