import { type FunctionComponent } from 'preact'

import { TodoItem } from './item'
import { type ListOfTodos } from '../types'

interface TodosProps {
  todos: ListOfTodos
}

export const Todos: FunctionComponent<TodosProps> = ({ todos }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
