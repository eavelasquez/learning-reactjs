import { useContext } from 'react'

import '../styles/components/Products.css'
import { AppContext } from '../context/AppContext'
import { Product } from './Product'

export const Products = () => {
  const { state, addToCart } = useContext(AppContext)
  const { products } = state

  const handleAddToCart = (product) => () => {
    addToCart(product)
  }

  return (
    <div className='Products-items'>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}
