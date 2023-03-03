import { type FunctionComponent } from 'preact'

import { type Todo } from '../types'

interface TodoItemProps {
  todo: Todo
}

export const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className='view'>
        <input className='toggle' type='checkbox' checked={todo.completed} />
        <label>{todo.title}</label>
        <button className='destroy' />
      </div>
    </li>
  )
}
