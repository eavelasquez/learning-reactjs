export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartInitialState = []

export const cartReducer = (state, action) => {
  const { type, payload } = action

  if (type === CART_ACTION_TYPES.ADD_TO_CART) {
    const { id } = payload
    // Check if product is already in cart
    const productInCart = state.findIndex((item) => item.id === id)

    // If product is already in cart, increase quantity by 1
    if (productInCart !== -1) {
      const newCart = structuredClone(state)
      newCart[productInCart].quantity += 1
      return newCart
    }
    // Otherwise, add product to cart
    return [...state, { ...payload, quantity: 1 }]
  } else if (type === CART_ACTION_TYPES.REMOVE_FROM_CART) {
    const { id } = payload
    // Filter out product with matching id
    return state.filter((item) => item.id !== id)
  } else if (type === CART_ACTION_TYPES.CLEAR_CART) {
    return cartInitialState
  } else {
    throw Error(`Unknown action type: ${type}`)
  }
}
