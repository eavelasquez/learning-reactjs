import { type FunctionComponent } from 'preact'

import { type TodoTitle } from '../types'
import { useState } from 'preact/hooks'

interface AddTodoProps {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const AddTodo: FunctionComponent<AddTodoProps> = (
  { onAddTodo }
) => {
  const [title, setTitle] = useState('')

  const handleTitleChange = (event: Event): void => {
    const { value } = event.target as HTMLInputElement
    setTitle(value)
  }

  const handleAddTodo = (): void => {
    if (title.length > 0) {
      onAddTodo({ title })
      setTitle('')
    }
  }

  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      handleAddTodo()
    }
  }

  const handleSubmit = (event: Event): void => {
    event.preventDefault()
    handleAddTodo()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={title}
        onInput={handleTitleChange}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    </form>
  )
}
