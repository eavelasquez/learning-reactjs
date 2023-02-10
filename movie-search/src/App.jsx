import { useRef } from 'react'

import './App.css'
import withResults from './mocks/with-results.json'
import { Movies } from './components/Movies'

function App () {
  const movies = withResults.Search

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
