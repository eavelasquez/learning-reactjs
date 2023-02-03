import { Product } from './Product'
import '../styles/components/Products.css'

export const Products = ({ products }) => {
  return (
    <div className='Products-items'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
