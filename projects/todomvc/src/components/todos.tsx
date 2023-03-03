import { type FunctionComponent } from 'preact'

import { TodoItem } from './item'
import { type TodoId, type ListOfTodos } from '../types'

interface TodosProps {
  todos: ListOfTodos
  onRemoveTodo: ({ id }: TodoId) => void
}

export const Todos: FunctionComponent<TodosProps> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={() => { onRemoveTodo({ id: todo.id }) }} />
      ))}
    </ul>
  )
}
