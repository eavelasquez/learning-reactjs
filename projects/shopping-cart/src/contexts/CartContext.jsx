import { createContext, useReducer, useState } from 'react'

import { cartReducer } from '../reducers/cartReducer'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const isInCart = (id) => {
    return state.some((item) => item.id === id)
  }

  return (
    <CartContext.Provider value={{
      cart: state,
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
