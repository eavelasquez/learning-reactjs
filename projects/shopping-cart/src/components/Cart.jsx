import { useId } from 'react'

import '../styles/Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map((product) => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> <span>${product.price}</span>
                </div>

                <footer>
                  <small>
                    Quantity: <strong>{product.quantity}</strong>
                  </small>
                  <button type='button' onClick={() => addToCart(product)}>
                    +
                  </button>
                </footer>
              </li>
            ))
          }
        </ul>

        <button type='button' onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
