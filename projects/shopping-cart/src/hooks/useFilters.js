import { useState } from 'react'

export function useFilters() {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const updateFilters = (newFilters) => {
    setFilters({
      ...filters,
      ...newFilters,
    })
  }

  const filterProducts = (products) => (
    products.filter((product) => (
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
    ))
  )

  return { filters, updateFilters, filterProducts }
}
