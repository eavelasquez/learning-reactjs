import { AboutPage, HomePage, NotFoundPage } from './pages'
import { Router } from './components'

const routes = [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/about',
    Component: AboutPage
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
