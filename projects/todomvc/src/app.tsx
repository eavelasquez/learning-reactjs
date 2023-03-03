import { type JSX } from 'preact/jsx-runtime'
import { useState } from 'preact/hooks'

import { Todos } from './components/todos'
import { type ListOfTodos } from './types'

const mockTodos: ListOfTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'Todo 2',
    completed: true
  },
  {
    id: '3',
    title: 'Todo 3',
    completed: false
  }
]

export const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)

  return (
    <div className='todoapp'>
      <Todos todos={todos} />
    </div>
  )
}
