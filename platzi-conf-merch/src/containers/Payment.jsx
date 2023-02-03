import { useContext } from 'react'

import '../styles/containers/Payment.css'
import { AppContext } from '../context/AppContext'

export const Payment = () => {
  const { state } = useContext(AppContext)
  const { cart } = state

  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Order Summary:</h3>

        {cart.map((item) => (
          <div className='Payment-item' key={item.id}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}

        <div className='Payment-button'>Pay with Paypal</div>
      </div>
    </div>
  )
}
