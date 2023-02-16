import { Filters } from './Filters'

export function Header ({ onChangeFilters }) {
  return (
    <header>
      <h1>Shopping Cart 🛒</h1>
      <Filters onChangeFilters={onChangeFilters} />
    </header>
  )
}
