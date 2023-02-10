import { useEffect, useState } from 'react'

import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ query })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() => {
    if (query === '') {
      setError('Search field is empty')
      return
    }

    if (query.length < 3) {
      setError('Search query is too short - should be 3 characters or more.')
      return
    }

    if (!query.match(/^[a-zA-Z0-9 ]*$/)) {
      setError('Search query should only contain Latin letters and numbers.')
      return
    }

    setError('')
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='query'
            placeholder='Avengers, Star Wars, The Godfather...'
            value={query}
            onChange={handleChange}
          />
          <button type='submit'>Search</button>
        </form>
        {error && <p className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
