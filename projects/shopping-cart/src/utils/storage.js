export const getCartFromStorage = () => {
  const cart = window.localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

export const updateCartToStorage = (cart) => {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeCartFromStorage = () => {
  window.localStorage.removeItem('cart')
}
