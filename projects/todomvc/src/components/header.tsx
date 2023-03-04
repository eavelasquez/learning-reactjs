import { type FunctionComponent } from 'preact'

import { type TodoTitle } from '../types'

interface HeaderProps {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: FunctionComponent<HeaderProps> = (
  { onAddTodo }
) => {
  return (
    <header className='header'>
      <h1>
        todos
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
          alt='Typescript'
          width='60'
          height='auto'
        />
      </h1>
    </header>
  )
}
