export const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className='Search'>
      <input
        type='text'
        ref={searchInput}
        value={search}
        onChange={handleSearch}
        placeholder='Search a character'
      />
    </div>
  )
}
