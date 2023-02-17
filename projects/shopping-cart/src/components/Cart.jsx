import { useId } from 'react'

import '../styles/Cart.css'
import { CartIcon, ClearCartIcon } from './Icons'
import { CartItem } from './CartItem'
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
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button type='button' onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
