import { type JSX } from 'preact/jsx-runtime'
import { useState } from 'preact/hooks'

import { Footer, Header, Todos } from './components'
import { TODO_FILTERS } from './utils/consts'
import { type TodoFilter, type ListOfTodos, type TodoId, type TodoIdCompleted } from './types'

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
  const [filterSelected, setFilterSelected] = useState<TodoFilter>(TODO_FILTERS.ALL)

  const activeTodos = todos.filter((todo) => !todo.completed).length
  const completedTodos = todos.length - activeTodos

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

  const handleFilterSelected = (filter: TodoFilter): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Header
        onAddTodo={(title) => {
          console.log(title)
        }}
      />

      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}
      />

      <Footer
        activeCount={activeTodos}
        completedCount={completedTodos}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        onFilterSelected={handleFilterSelected}
      />
    </div>
  )
}
