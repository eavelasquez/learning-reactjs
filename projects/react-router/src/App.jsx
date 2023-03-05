import { AboutPage, HomePage, NotFoundPage, SearchPage } from './pages'
import { Router } from './components'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
  },
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={NotFoundPage} />
    </main>
  )
}

export default App
