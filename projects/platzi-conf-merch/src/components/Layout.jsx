import { Outlet } from 'react-router-dom'

import '../styles/components/Layout.css'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = () => {
  return (
    <div className='Layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
