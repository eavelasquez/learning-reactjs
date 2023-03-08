import { lazy, Suspense } from 'react'

// static imports
// import { AboutPage, HomePage, NotFoundPage, SearchPage } from './pages'
import { Route, Router } from './components'

// dynamic imports
const AboutPage = lazy(() => import('./pages/About.jsx'))
const HomePage = lazy(() => import('./pages/Home.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))

const routes = [
  {
    path: '/:lang/about',
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
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={NotFoundPage}>
          <Route path='/' Component={HomePage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
