import { type TODO_FILTERS } from './utils/consts'

export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>
export type TodoIdCompleted = Pick<Todo, 'id' | 'completed'>

export type ListOfTodos = Todo[]

export type TodoFilter = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
