import { type JSX } from 'preact/jsx-runtime'
import { useState } from 'preact/hooks'

import { Todos } from './components/todos'
import { type ListOfTodos, type TodoId, type TodoIdCompleted } from './types'

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
  const [todos, setTodos] = useState(mockTodos)

  const handleRemoveTodo = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggleTodo = (
    { id, completed }: TodoIdCompleted
  ): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        todos={todos}
        onRemoveTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}
      />
    </div>
  )
}
