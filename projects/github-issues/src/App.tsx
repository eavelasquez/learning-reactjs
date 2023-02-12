import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const App: FC = () => {
  return (
    <div className='container mt-3'>
      <h1>GitHub Issues <small className='text-muted'>issue tracker</small></h1>
      <Outlet />
    </div>
  )
}
