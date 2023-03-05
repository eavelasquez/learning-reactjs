import { AboutPage, HomePage, NotFoundPage, SearchPage } from './pages'
import { Route, Router } from './components'

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={NotFoundPage}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>
    </main>
  )
}

export default App
