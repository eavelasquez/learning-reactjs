import { useEffect, useState, useReducer } from 'react'

import { getCharacters } from '../services/rick-and-morty'

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  if (action.type === 'ADD_TO_FAVORITES') {
    return {
      ...state,
      favorites: [...state.favorites, action.payload]
    }
  }

  return state
}

export const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters)
      setIsLoading(false)
    })
  }, [])

  const handleClick = (favorite) => {
    if (isFavorite(favorite)) {
      return
    }
    dispatch({ type: 'ADD_TO_FAVORITES', payload: favorite })
  }

  const isFavorite = (character) => {
    return favorites.favorites.find((favorite) => favorite.id === character.id)
  }

  return (
    <div className='Characters'>

      <h2>Favorites</h2>
      {
        favorites.favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.name}
          </li>
        ))
      }

      <h2>Characters</h2>

      {isLoading
        ? (
          <p>Loading...</p>
        )
        : (
          characters.map((character) => (
            <div className='Character-item' key={character.id}>
              <img src={character.image} alt={character.name} />
              <h3>{character.name}</h3>
              <button
                type='button'
                onClick={() => handleClick(character)}
                disabled={isFavorite(character)}
              >
                Add to favorites
              </button>
            </div>
          ))
        )}
    </div>
  )
}
