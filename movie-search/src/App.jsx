import './App.css'

function App() {
  return (
    <div className="page">
      <header>
        <h1>Movie Search</h1>

        <form className="form">
          <input type='text' placeholder='Avengers, Star Wars, The Godfather...' />
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        ...results
      </main>
    </div>
  )
}

export default App
