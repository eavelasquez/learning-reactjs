import { useState } from 'react'

import { Filters, Footer, Header, Products } from './components'
import { products as initialState } from './mocks/products'

function App () {
  const [products] = useState(initialState)
  const [filters, setFilters] = useState({
    category: 'all',
    minimumPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minimumPrice &&
        (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header>
        <Filters onChangeFilters={setFilters} />
      </Header>
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
