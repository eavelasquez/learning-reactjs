import { type FunctionComponent } from 'preact'

import { type Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onRemoveTodo: () => void
}

export const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, onRemoveTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={todo.completed} />
        <label>{todo.title}</label>
        <button className='destroy' onClick={onRemoveTodo} />
      </div>
    </li>
  )
}
