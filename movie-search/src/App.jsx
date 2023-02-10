import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => setSearch(event.target.value)

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
              borderColor: error ? 'red' : 'transparent',
              boxShadow: error ? '0 0 0 1px red' : 'none'
            }}
            value={search}
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
