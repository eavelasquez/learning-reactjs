import './Footer.css'

export function Footer ({ filters }) {
  return (
    <footer className='footer'>
      <h4>Shopping Cart React ⚛️ － <span>@eavelasquez</span></h4>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </footer>
  )
}
