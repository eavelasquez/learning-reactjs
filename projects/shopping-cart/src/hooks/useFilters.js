import { useContext } from 'react'

import { FiltersContext } from '../contexts/FiltersContext'

export function useFilters () {
  const context = useContext(FiltersContext)

  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider')
  }

  const { filters, setFilters } = context

  const updateFilters = (newFilters) => {
    setFilters({ ...filters, ...newFilters })
  }

  const filterProducts = (products) => (
    products.filter((product) => (
      product.price >= filters.minPrice &&
      (filters.category === 'all' || product.category === filters.category)
    ))
  )

  return { filters, filterProducts, updateFilters }
}
