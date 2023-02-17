import { createContext, useState } from 'react'

export const FiltersContext = createContext() // Singleton - only one instance

// Provider component - wraps the entire app
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
