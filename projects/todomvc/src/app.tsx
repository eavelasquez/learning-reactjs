import { type JSX } from 'preact/jsx-runtime'
import { useState } from 'preact/hooks'

import { Footer, Header, TodoList } from './components'
import { TODO_FILTERS } from './utils/consts'
import {
  type TodoFilter,
  type ListOfTodos,
  type TodoId,
  type TodoIdCompleted,
  type TodoTitle
} from './types'

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

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
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
      <Header onAddTodo={handleAddTodo} />

      {
        todos.length > 0 && (
          <section className='main'>
            <input id='toggle-all' className='toggle-all' type='checkbox' />
            <label htmlFor='toggle-all'>Mark all as complete</label>

            <TodoList
              todos={filteredTodos}
              onRemoveTodo={handleRemoveTodo}
              onToggleTodo={handleToggleTodo}
            />
          </section>
        )
      }

      {
        ((activeTodos !== 0) || (completedTodos !== 0)) && (
          <Footer
            activeCount={activeTodos}
            completedCount={completedTodos}
            filterSelected={filterSelected}
            onClearCompleted={handleClearCompleted}
            onFilterSelected={handleFilterSelected}
          />
        )
      }
    </div>
  )
}
