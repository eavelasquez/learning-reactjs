import { useRef } from 'react'

import './App.css'
import withResults from './mocks/with-results.json'

function App() {
  const movies = withResults.Search
  const hasMovies = movies.length > 0

  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    const query = inputRef.current.value
    console.log(query)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='query'
            placeholder='Avengers, Star Wars, The Godfather...'
            ref={inputRef}
          />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {
          hasMovies
            ? (
              <ul>
                {
                  movies.map((movie) => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} alt={movie.Title} />
                    </li>
                  ))
                }
              </ul>
            )
            : (
              <p>No movies found</p>
            )
        }
      </main>
    </div>
  )
}

export default App
