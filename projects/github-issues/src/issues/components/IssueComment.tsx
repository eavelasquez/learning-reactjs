import { FC } from 'react'
import ReactMarkdown from 'react-markdown'

import { Issue } from '../interfaces'

interface IssueCommentProps {
  issue: Issue
}

export const IssueComment: FC<IssueCommentProps> = ({ issue }) => {
  const { body, user } = issue

  return (
    <div className='col-12'>
      <div className='card border-white mt-2'>
        <div className='card-header bg-dark'>
          <img src={user.avatar_url} alt={user.login} className='avatar' />
          <span className='mx-2'>{user.login}</span>
        </div>

        <div className='card-body text-dark'>
          <ReactMarkdown>{body || 'No description'}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}
