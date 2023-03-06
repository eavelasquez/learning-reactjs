import { type FunctionComponent } from 'preact'

import { Filters } from './filters'
import { type TodoFilter } from '../types'

export interface FooterProps {
  activeCount: number
  completedCount: number
  filterSelected: TodoFilter
  onClearCompleted: () => void
  onFilterSelected: (filter: TodoFilter) => void
}

export const Footer: FunctionComponent<FooterProps> = (
  { activeCount, completedCount, filterSelected, onClearCompleted, onFilterSelected }
) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> {activeCount === 1 ? 'item' : 'items'} left
      </span>
      <Filters filterSelected={filterSelected} onFilterSelected={onFilterSelected} />
      {completedCount > 0 && (
        <button className='clear-completed' onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}
