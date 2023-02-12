import { useMemo, useReducer, useState, useRef, useCallback } from 'react'

import { Search } from './Search'
import useCharacters from '../hooks/useCharacters'

const CHARACTERS_ENDPOINT = 'https://rickandmortyapi.com/api/character'

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
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)

  const { characters, isLoading } = useCharacters(CHARACTERS_ENDPOINT)

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
    <>
      <h2>Characters</h2>
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      <div className='Characters-favorites'>
        <h3>Favorites</h3>

        {favorites.favorites.length > 0 && (
          <div className='Favorites'>
            {favorites.favorites.map((favorite) => (
              <li key={favorite.id}>
                {favorite.name}
              </li>
            ))}
          </div>
        )}
      </div>

      <div className='Characters'>
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
    </>
  )
}
