import { FiCheckCircle, FiInfo, FiMessageSquare } from 'react-icons/fi'
import { FC } from 'react'

import { Issue, State } from '../interfaces'
import { useNavigate } from 'react-router-dom'

interface IssueItemProps {
  issue: Issue
}

export const IssueItem: FC<IssueItemProps> = ({ issue }) => {
  const navigate = useNavigate()

  const { title, number, user, comments } = issue

  const handleClick = () => navigate(`/issues/issue/${number}`)

  return (
    <div className='card mb-2 issue' onClick={handleClick}>
      <div className='card-body d-flex align-items-center'>
        {
          issue.state === State.Open
            ? <FiInfo size={30} color='red' />
            : <FiCheckCircle size={30} color='green' />
        }

        <div className='d-flex flex-column flex-fill px-2'>
          <span>{title}</span>
          <span className='issue-subinfo'>{`#${number}`} opened 2 days ago by <span className='fw-bold'>{user.login}</span></span>
        </div>

        <div className='d-flex align-items-center'>
          <img src={user.avatar_url} alt={user.login} className='avatar' />
          <span className='px-2'>{comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  )
}
