import { useState } from 'react'

import './Filters.css'

export function Filters({ onChangeFilters }) {
  const [minimumPrice, setMinimumPrice] = useState(0)

  const handleMinimumPriceChange = (event) => {
    setMinimumPrice(event.target.value)
    onChangeFilters((prevFilters) => ({
      ...prevFilters,
      minimumPrice: event.target.value,
    }))
  }

  const handleCategoryChange = (event) => {
    onChangeFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }))
  }

  return (
    <section className='filters'>
      <div className='filters__price'>
        <label htmlFor='minimumPrice'>Minimum Price</label>
        <input
          type='range'
          id='minimumPrice'
          min='0'
          max='1000'
          onChange={handleMinimumPriceChange}
        />
        <span className='filters__price-value'>${minimumPrice}</span>
      </div>

      <div className='filters__search'>
        <input type='text' placeholder='Search' />
      </div>

      <div className='filters__category'>
        <label htmlFor='category'>Category</label>
        <select id='category' onChange={handleCategoryChange}>
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  )
}
