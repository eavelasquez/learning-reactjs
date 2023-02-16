import { useContext } from 'react'

import { FiltersContext } from '../contexts/FiltersContext'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

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
