export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

export const TODO_FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    label: 'All',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    label: 'Active',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    label: 'Completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const
