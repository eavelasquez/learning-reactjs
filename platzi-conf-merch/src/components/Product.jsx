export const Product = ({ product }) => {
  return (
    <div className='Products-item'>
      <div className='Product-image'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='Products-item-info'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
        <button type='button'>Buy</button>
      </div>
    </div>
  )
}
