export function CartItem ({ title, price, quantity, thumbnail, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - <span>${price}</span>
      </div>

      <footer>
        <small>
          Quantity: <strong>{quantity}</strong>
        </small>
        <button type='button' onClick={addToCart}>
          +
        </button>
      </footer>
    </li>
  )
}
