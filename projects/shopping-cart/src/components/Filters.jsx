import { useId, useState } from 'react'

import '../styles/Filters.css'

export function Filters({ onChangeFilters }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value)
    onChangeFilters({
      minPrice: event.target.value,
    })
  }

  const handleCategoryChange = (event) => {
    onChangeFilters({
      category: event.target.value,
    })
  }

  return (
    <section className='filters'>
      <div className='filters__price'>
        <label htmlFor={minPriceFilterId}>Minimum Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPriceChange}
        />
        <span className='filters__price-value'>${minPrice}</span>
      </div>

      <div className='filters__category'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
