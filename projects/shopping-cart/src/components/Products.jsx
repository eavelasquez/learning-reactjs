import '../styles/Products.css'
import { ProductItem } from './ProductItem'
import { useCart } from '../hooks'

export function Products ({ products }) {
  const { addToCart, removeFromCart, isInCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={isInCart}
          />
        ))}
      </ul>
    </main>
  )
}
