import { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/containers/Information.css'
import { AppContext } from '../context/AppContext'

export const Information = () => {
  const { state, addToBuyer } = useContext(AppContext)
  const { cart } = state

  const form = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = () => {
    const formData = new window.FormData(form.current)
    const buyer = Object.fromEntries(formData.entries())
    addToBuyer(buyer)
    navigate('/checkout/payment')
  }

  return (
    <div className='Information'>
      <div className='Information-content'>
        <div className='Information-head'>
          <h2>Contact Information</h2>
        </div>

        <div className='Information-form'>
          <form ref={form}>
            <input type='text' placeholder='Full Name' name='name' />
            <input type='text' placeholder='Email' name='email' />
            <input type='text' placeholder='Address' name='address' />
            <input type='text' placeholder='Apt' name='apt' />
            <input type='text' placeholder='City' name='city' />
            <input type='text' placeholder='Country' name='country' />
            <input type='text' placeholder='State' name='state' />
            <input type='text' placeholder='Postal Code' name='postalCode' />
            <input type='text' placeholder='Phone' name='phone' />
          </form>
        </div>
        <div className='Information-buttons'>
          <button type='button' className='Information-back'>
            <Link to='/checkout'>Back</Link>
          </button>
          <button type='submit' className='Information-next' onClick={handleSubmit}>
            Pay
          </button>
        </div>
      </div>

      <div className='Information-sidebar'>
        <h3>Order Summary</h3>

        {cart.map((item) => (
          <div className='Information-item' key={item.id}>
            <div className='Information-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
