import {
  getCartFromStorage,
  removeCartFromStorage,
  updateCartToStorage
} from '../utils/storage'

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  UNKNOWN: 'UNKNOWN'
}

export const cartInitialState = getCartFromStorage()

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, payload) => {
    // Check if product is already in cart
    const productInCart = state.findIndex((item) => item.id === payload.id)

    // If product is already in cart, increase quantity by 1
    // Otherwise, add product to cart
    let newState = []
    if (productInCart !== -1) {
      const newCart = structuredClone(state)
      newCart[productInCart].quantity += 1
      newState = newCart
    } else {
      newState = [...state, { ...payload, quantity: 1 }]
    }

    updateCartToStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, payload) => {
    // Filter out product with matching id
    const newState = state.filter((item) => item.id !== payload.id)

    updateCartToStorage(newState)
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    removeCartFromStorage()
    return []
  },
  [CART_ACTION_TYPES.UNKNOWN]: () => {
    throw Error('Unknown action type')
  }
}

export const cartReducer = (state, action) => {
  const { type, payload } = action
  const updateState = UPDATE_STATE_BY_ACTION[type] || UPDATE_STATE_BY_ACTION[CART_ACTION_TYPES.UNKNOWN]
  return updateState ? updateState(state, payload) : state
}
