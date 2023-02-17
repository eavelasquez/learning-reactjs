import { useId } from 'react'

import '../styles/Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://via.placeholder.com/150' alt='product' />
            <div>
              <strong>iPhone</strong> <span>$100</span>
            </div>

            <footer>
              <small>
                Quantity: <strong>1</strong>
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
