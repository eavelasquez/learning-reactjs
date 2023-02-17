import { createContext } from 'react'

import { useCartReducer } from '../hooks'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart
  } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
