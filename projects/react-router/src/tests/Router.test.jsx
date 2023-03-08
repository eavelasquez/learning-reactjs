import { beforeEach, describe, it, expect, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { Link, Route, Router } from '../components'
import { getCurrentPath } from '../utils/helpers'

vi.mock('../utils/helpers.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router Component', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should be working', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 page if no route is matched', () => {
    render(<Router routes={[]} defaultComponent={() => <div>404</div>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first matched route', () => {
    getCurrentPath.mockReturnValue('/') // mock the getCurrentPath function

    const routes = [
      {
        path: '/',
        Component: () => <div>Home</div>
      },
      {
        path: '/about',
        Component: () => <div>About</div>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('Home')).toBeTruthy()
  })

  it('should navigate using Link component', () => {
    getCurrentPath.mockReturnValueOnce('/') // mock the getCurrentPath function

    render(
      <Router>
        <Route
          path='/' Component={() => (
            <>
              <h1>Home</h1>
              <Link to='/about'>Go to About</Link>
            </>
          )}
        />
        <Route
          path='/about' Component={() => (
            <>
              <h1>About</h1>
              <Link to='/'>Go to Home</Link>
            </>
          )}
        />
      </Router>
    )

    expect(screen.getByText('Home')).toBeTruthy()

    const button = screen.getByText(/Go to About/)
    fireEvent.click(button)

    expect(screen.findByText('About')).toBeTruthy()
  })
})
