import { useEffect, useMemo, useReducer, useState, useRef } from 'react'

import { getCharacters } from '../services/rick-and-morty'
import { Search } from './Search'
import { useCallback } from 'react'

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
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

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

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])


  const filterCharacters = (characters) => {
    return characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  const searchCharacters = useMemo(() => {
    return filterCharacters(characters)
  }, [characters, search])

  const isFavorite = (character) => {
    return favorites.favorites.find((favorite) => favorite.id === character.id)
  }

  return (
    <div className='Characters'>

      {favorites.favorites.length > 0 && (
        <div className='Favorites'>
          <h2>Favorites</h2>

          {favorites.favorites.map((favorite) => (
            <li key={favorite.id}>
              {favorite.name}
            </li>
          ))}
        </div>
      )}

      <h2>Characters</h2>

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      {isLoading
        ? (
          <p>Loading...</p>
          )
        : (
            searchCharacters.map((character) => (
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
