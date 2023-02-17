import { Cart, Footer, Header, Products } from './components'
import { IS_DEVELOPMENT } from './config'
import { products as initialProducts } from './mocks/products'
import { useFilters } from './hooks'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
