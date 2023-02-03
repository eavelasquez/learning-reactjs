export const Product = ({ product }) => {
  return (
    <div className='Products-item'>
      <img src={product.image} alt={product.title} />

      <div className='Products-item-info'>
        <h2>
          {product.title}
          <span>
            $
            {' '}
            {product.price}
          </span>
        </h2>
        <p>{product.description}</p>
        <button type='button'>Buy</button>
      </div>
    </div>
  )
}
