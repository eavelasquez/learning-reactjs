import { useId } from 'react'

import '../styles/Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const minPriceFilterId = useId()
  const categoryFilterId = useId()
  const { filters, updateFilters } = useFilters()

  const handleMinPriceChange = (event) => {
    updateFilters({ minPrice: event.target.value })
  }

  const handleCategoryChange = (event) => {
    updateFilters({ category: event.target.value })
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Minimum Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPriceChange}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skincare</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}
