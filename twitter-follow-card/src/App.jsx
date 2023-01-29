import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Twitter Follow Card</h1>

      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            src="https://unavatar.io/eavelasquez"
            alt="eavelasquez's avatar"
          />
          <div className='tw-followCard-info'>
            <strong>Esteban Velasquez</strong>
            <span className='tw-followCard-infoUserName'>@eavelasquez</span>
          </div>
        </header>

        <aside>
          <button className='tw-followCard-button'>Follow</button>
        </aside>
      </article>
    </div>
  )
}

export default App
