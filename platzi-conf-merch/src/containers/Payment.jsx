import { useContext } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

import '../styles/containers/Payment.css'
import { AppContext } from '../context/AppContext'
import { sumTotal } from '../utils'

export const Payment = () => {
  const { state } = useContext(AppContext)
  const { cart, buyer } = state

  const paypalButtonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleCreateOrder = (data, actions) => {
    console.log('Create Order', data, actions)
    return actions.order.create({
      payer: {
        name: buyer.name,
        email_address: buyer.email
      },
      purchase_units: [
        {
          amount: {
            value: sumTotal(cart)
          }
        }
      ]
    })
  }

  const handleOnApprove = (data, actions) => {
    console.log('Approve', data, actions)
    return actions.order.capture()
      .then((details) => {
        const name = details.payer.name.given_name
        console.log(name)
      })
  }

  const handleOnCancel = (data, actions) => {
    console.log('Cancel', data, actions)
  }

  const handleOnError = (error) => {
    console.log(`Error: ${error}`)
  }

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

        <div className='Payment-button'>
          <PayPalButtons
            style={paypalButtonStyles}
            createOrder={handleCreateOrder}
            onApprove={handleOnApprove}
            onCancel={handleOnCancel}
            onError={handleOnError}
          />
        </div>
      </div>
    </div>
  )
}
