import { useEffect, useState } from 'react'

import { getCharacters } from '../services/rick-and-morty'

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='Characters'>
      <h2>Characters</h2>

      {isLoading
        ? (
          <p>Loading...</p>
          )
        : (
            characters.map((character) => (
              <div className='Character' key={character.id}>
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
              </div>
            ))
          )}
    </div>
  )
}
