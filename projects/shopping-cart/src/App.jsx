import { useState } from 'react'

import { Header } from './components/Header'
import { Products } from './components/Products'
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
      <Header />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
