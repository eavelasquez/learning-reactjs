import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import '../styles/containers/Checkout.css'
import { AppContext } from '../context/AppContext'
import { sumTotal } from '../utils'

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext)
  const { cart } = state

  const subtitle = cart.length > 0 ? 'List of Products' : 'No Products'

  const handleRemove = (product) => () => {
    removeFromCart(product)
  }

  return (
    <>
      <Helmet>
        <title>Checkout - Platzi Conf Merch</title>
      </Helmet>

      <div className='Checkout'>
        <div className='Checkout-content'>
          <h3>{subtitle}</h3>

          {cart.map((item) => (
            <div className='Checkout-item' key={item.id}>
              <div className='Checkout-element'>
                <h4>{item.title}</h4>
                <span>
                  $
                  {' '}
                  {item.price}
                </span>
              </div>

              <button type='button' onClick={handleRemove(item)}>
                <svg height='21' viewBox='0 0 21 21' width='21' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='none' fillRule='evenodd' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' transform='translate(2 2)'>
                    <circle cx='8.5' cy='8.5' r='8' />
                    <g transform='matrix(0 1 -1 0 17 0)'>
                      <path d='m5.5 11.5 6-6' />
                      <path d='m5.5 5.5 6 6' />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className='Checkout-sidebar'>
            <h3>{`Price Total: $ ${sumTotal(cart)}`}</h3>
            <Link to='/checkout/information'>
              <button type='button'>Continue Shopping</button>
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
