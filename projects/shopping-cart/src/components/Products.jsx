import '../styles/Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks'

export function Products ({ products }) {
  const { addToCart, removeFromCart, isInCart } = useCart()

  return (
    <main className='products'>
      <ul>
        {products.map((product) => {
          const isProductInCart = isInCart(product.id)
          const className = isProductInCart ? 'remove' : 'add'
          const icon = isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />

          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  type='button'
                  className={className}
                  onClick={() => (
                    isProductInCart ? removeFromCart(product.id) : addToCart(product)
                  )}
                >
                  {icon}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
