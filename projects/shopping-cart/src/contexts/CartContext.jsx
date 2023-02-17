import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // Check if product is already in cart
    const productInCart = cart.findIndex((item) => item.id === product.id)

    // If product is already in cart, increase quantity by 1
    // Otherwise, add product to cart
    if (productInCart !== -1) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      setCart(newCart)
    } else {
      setCart((prevCart) => (
        [...prevCart, { ...product, quantity: 1 }]
      ))
    }
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => (
      // Filter out product with matching id
      prevCart.filter((item) => item.id !== id)
    ))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
