import { Cart, Footer, Header, Products } from './components'
import { CartContext } from './contexts/CartContext'
import { IS_DEVELOPMENT } from './config'
import { products as initialProducts } from './mocks/products'
import { useFilters } from './hooks'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartContext.Provider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartContext.Provider>
  )
}

export default App
