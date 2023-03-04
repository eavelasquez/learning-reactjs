import { type FunctionComponent } from 'preact'

import { type Todo } from '../types'

interface TodoItemProps {
  todo: Todo
  onRemoveTodo: () => void
  onToggleTodo: () => void
}

export const TodoItem: FunctionComponent<TodoItemProps> = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={todo.completed}
          onChange={onToggleTodo}
        />
        <label>{todo.title}</label>
        <button className='destroy' onClick={onRemoveTodo} />
      </div>
    </li>
  )
}
