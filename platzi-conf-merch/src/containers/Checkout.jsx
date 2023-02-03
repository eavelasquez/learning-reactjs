import { Link } from 'react-router-dom'

import '../styles/containers/Checkout.css'

export const Checkout = () => {
  return (
    <div className="Checkout">
      <div className='Checkout-content'>
        <h3>List of Products</h3>

        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM Name</h4>
            <span>$10</span>
          </div>

          <button type="button">
            <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(2 2)">
                <circle cx="8.5" cy="8.5" r="8" /><g transform="matrix(0 1 -1 0 17 0)">
                  <path d="m5.5 11.5 6-6" />
                  <path d="m5.5 5.5 6 6" />
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="Checkout-sidebar">
        <h3>Price Details $10</h3>
        <Link to='/checkout/information'>
          <button type='button'>Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}
