import { type FunctionComponent } from 'preact'

import { TODO_FILTERS_BUTTONS } from '../utils/consts'
import { type TodoFilter } from '../types'

interface FiltersProps {
  filterSelected: TodoFilter
  onFilterSelected: (filter: TodoFilter) => void
}

export const Filters: FunctionComponent<FiltersProps> = (
  { filterSelected, onFilterSelected }
) => {
  return (
    <ul className='filters'>
      {
        Object.entries(TODO_FILTERS_BUTTONS).map(([key, { label, href }]) => {
          const isSelected = filterSelected === key

          return (
            <li key={key}>
              <a
                className={isSelected ? 'selected' : ''}
                href={href}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterSelected(key as TodoFilter)
                }}
              >
                {label}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
