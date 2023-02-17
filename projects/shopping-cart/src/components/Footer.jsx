import '../styles/Footer.css'
import { useFilters } from '../hooks'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>Shopping Cart React ⚛️ －<span>@eavelasquez</span></h4>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </footer>
  )
}
