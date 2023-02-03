import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Header } from './Header'
import '../styles/components/Layout.css'

export const Layout = () => {
  return (
    <div className='Layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
