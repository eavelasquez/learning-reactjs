import { useContext } from 'react'

import { CartContext } from '../contexts/CartContext'

export function useCart () {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  const { cart, addToCart, removeFromCart, clearCart, isInCart } = context

  return { cart, addToCart, removeFromCart, clearCart, isInCart }
}
