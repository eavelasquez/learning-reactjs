import { useState } from 'react'

function HomePage () {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <a href='/about'>Go to about page</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img src='https://placekitten.com/200/300' alt='kitten' />
        <p>This is the about page</p>
      </div>
      <a href='/'>Go back home</a>
    </>
  )
}

function App () {
  const [currentPage, setCurrentPage] = useState(window.location.pathname)

  return (
    <main>
      {currentPage === '/' && <HomePage />}
      {currentPage === '/about' && <AboutPage />}
    </main>
  )
}

export default App
