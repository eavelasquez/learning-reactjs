import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, searchError } = useSearch()
  const { movies, loading, getMoviesError, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback((
    debounce((search) => getMovies({ search }), 300)
  ), [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChangeSearch = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleChangeSort = (event) => setSort(event.target.checked)

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='search'
            placeholder='Avengers, Star Wars, The Godfather...'
            style={{
              border: '1px solid transparent',
              borderColor: searchError ? 'red' : 'transparent',
              boxShadow: searchError ? '0 0 0 1px red' : 'none'
            }}
            value={search}
            onChange={handleChangeSearch}
          />
          <input type='checkbox' name='sort' checked={sort} onChange={handleChangeSort} />
          <button type='submit'>Search</button>
        </form>
        {searchError && <p className='error'>{searchError}</p>}
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} error={getMoviesError} />}
      </main>
    </div>
  )
}

export default App
