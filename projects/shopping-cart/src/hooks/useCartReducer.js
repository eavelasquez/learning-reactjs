import { cartReducer, cartInitialState } from '../reducers/cartReducer'

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: product })
  }

  const removeFromCart = (id) => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: { id } })
  }

  const clearCart = () => {
    dispatch({ type: CART_ACTION_TYPES.CLEAR_CART })
  }

  const isInCart = (id) => {
    return state.some((item) => item.id === id)
  }

  return {
    cart: state,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart
  }
}
