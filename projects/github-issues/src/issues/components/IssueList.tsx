import { FC } from 'react'

import { Issue, State } from '../interfaces'
import { IssueItem } from './IssueItem'

interface IssueListProps {
  issues: Issue[],
  state?: State,
  onStateChange: (state?: State) => void
}

export const IssueList: FC<IssueListProps> = ({ issues, state, onStateChange }) => {
  const isAll = !state
  const isOpen = state === State.Open
  const isClosed = state === State.Closed

  const isActive = (condition: boolean) => condition ? 'active' : ''

  return (
    <div className='card border-white'>
      <div className='card-header bg-dark'>
        <ul className='nav nav-pills card-header-pills'>
          <li className='nav-item'>
            <a
              className={`nav-link ${isActive(isAll)}`}
              onClick={() => onStateChange()}
            >
              All
            </a>
          </li>
          <li className='nav-item'>
            <a
              className={`nav-link ${isActive(isOpen)}`}
              onClick={() => onStateChange(State.Open)}
            >
              Open
            </a>
          </li>
          <li className='nav-item'>
            <a
              className={`nav-link ${isActive(isClosed)}`}
              onClick={() => onStateChange(State.Closed)}
            >
              Closed
            </a>
          </li>
        </ul>
      </div>

      <div className='card-body text-dark'>
        {
          issues.map(issue => (
            <IssueItem key={issue.id} issue={issue} />
          ))
        }
      </div>
    </div>
  )
}
