import { useState } from 'react'

import { Filters, Footer, Header, Products } from './components'
import { products as initialState } from './mocks/products'
import { useFilters } from './hooks/useFilters'

function App () {
  const [products] = useState(initialState)
  const { filters, updateFilters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header>
        <Filters onChangeFilters={updateFilters} />
      </Header>
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
