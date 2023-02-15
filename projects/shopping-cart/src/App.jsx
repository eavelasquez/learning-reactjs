import { Products } from './components/Products'
import { products } from './mocks/products'

function App () {
  return (
    <div className='App'>
      <h1>Shopping Cart 🛒</h1>
      <Products products={products} />
    </div>
  )
}

export default App
