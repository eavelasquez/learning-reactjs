import './Filters.css'

export function Filters () {
  return (
    <section className='filters'>
      <div className='filters__price'>
        <label htmlFor='price'>Price</label>
        <input type='range' id='price' min='0' max='1000' />
      </div>

      <div className='filters__search'>
        <input type='text' placeholder='Search' />
      </div>

      <div className='filters__category'>
        <label htmlFor='category'>Category</label>
        <select id='category'>
          <option value='all'>All</option>
          <option value='electronics'>Electronics</option>
        </select>
      </div>
    </section>
  )
}
