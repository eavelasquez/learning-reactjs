import '../styles/components/Products.css'
import { Product } from './Product'

export const Products = ({ products }) => {
  return (
    <div className='Products-items'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
