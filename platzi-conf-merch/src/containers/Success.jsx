import '../styles/containers/Success.css'
import { Map } from '../components/Map'

export const Success = () => {
  return (
    <div className='Success'>
      <div className='Success-content'>
        <h2>NAME, THANKS FOR YOUR PURCHASE</h2>
        <span>Your order will arrive in 3 business days at your address:</span>
        <div className='Success-map'>
          <Map />
        </div>
      </div>
    </div>
  )
}
