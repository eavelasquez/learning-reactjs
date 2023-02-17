import {
  getCartFromStorage,
  removeCartFromStorage,
  updateCartToStorage
} from '../utils/storage'

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartInitialState = getCartFromStorage()

export const cartReducer = (state, action) => {
  const { type, payload } = action

  let newState = []
  if (type === CART_ACTION_TYPES.ADD_TO_CART) {
    // Check if product is already in cart
    const productInCart = state.findIndex((item) => item.id === payload.id)

    // If product is already in cart, increase quantity by 1
    // Otherwise, add product to cart
    if (productInCart !== -1) {
      const newCart = structuredClone(state)
      newCart[productInCart].quantity += 1
      newState = newCart
    } else {
      newState = [...state, { ...payload, quantity: 1 }]
    }

    updateCartToStorage(newState)
    return newState
  } else if (type === CART_ACTION_TYPES.REMOVE_FROM_CART) {
    // Filter out product with matching id
    newState = state.filter((item) => item.id !== payload.id)

    updateCartToStorage(newState)
    return newState
  } else if (type === CART_ACTION_TYPES.CLEAR_CART) {
    removeCartFromStorage()
    return cartInitialState
  } else {
    throw Error(`Unknown action type: ${type}`)
  }
}
