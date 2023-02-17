import { Cart, Footer, Header, Products } from './components'
import { CartProvider } from './contexts/CartContext'
import { IS_DEVELOPMENT } from './config'
import { products as initialProducts } from './mocks/products'
import { useFilters } from './hooks'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
