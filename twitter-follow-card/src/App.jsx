import './App.css'

function App () {
  return (
    <div className='App'>
      <h1>Twitter Follow Card</h1>

      <article>
        <header>
          <img src="https://unavatar.io/eavelasquez" alt="eavelasquez's avatar" />
          <div>
            <strong>Esteban Velasquez</strong>
            <span>@eavelasquez</span>
          </div>
        </header>

        <aside>
          <button>Follow</button>
        </aside>
      </article>
    </div>
  )
}

export default App
