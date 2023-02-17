import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

export function ProductItem ({ product, addToCart, removeFromCart, isInCart }) {
  const isProductInCart = isInCart(product.id)
  const className = isProductInCart ? 'remove' : 'add'
  const icon = isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />

  return (
    <li>
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
}
