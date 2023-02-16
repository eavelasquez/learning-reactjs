import { useState } from 'react'

import { Footer, Header, Products } from './components'
import { IS_DEVELOPMENT } from './config'
import { products as initialState } from './mocks/products'
import { useFilters } from './hooks/useFilters'

function App () {
  const [products] = useState(initialState)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
