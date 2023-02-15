import { FC } from 'react'
import { FiCheckCircle, FiInfo, FiMessageSquare } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

import { getIssue, getIssueComments } from '../../api/github'
import { Issue, State } from '../interfaces'

interface IssueItemProps {
  issue: Issue
}

export const IssueItem: FC<IssueItemProps> = ({ issue }) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { title, number, user, comments } = issue

  const handleClick = () => navigate(`/issues/issue/${number}`)

  // prefetch issue and comments on mouse enter
  // this is useful for making the issue page load faster
  // const prefetchIssue = () => {
  //   queryClient.prefetchQuery(
  //     ['issue', number],
  //     () => getIssue(number),
  //     { staleTime: 1000 * 60 * 60 * 24 }
  //   )

  //   queryClient.prefetchQuery(
  //     ['issue', number, 'comments'],
  //     () => getIssueComments(number),
  //     { staleTime: 1000 * 60 * 60 * 24 }
  //   )
  // }

  // set issue data in cache on mouse enter
  // this is useful to update a query's cached data
  const presetIssue = () => {
    queryClient.setQueryData(
      ['issue', number],
      issue,
      {
        updatedAt: new Date().getTime() + 100000 // this is needed to update the query's updatedAt value
      }
    )
  }

  // const handleMouseEnter = () => prefetchIssue()
  const handleMouseEnter = () => presetIssue()

  return (
    <div
      className='card mb-2 issue'
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <div className='card-body d-flex align-items-center'>
        {
          issue.state === State.Open
            ? <FiInfo size={30} color='red' />
            : <FiCheckCircle size={30} color='green' />
        }

        <div className='d-flex flex-column flex-fill px-2'>
          <span>{title}</span>
          <span className='issue-subinfo'>{`#${number}`} opened 2 days ago by <span className='fw-bold'>{user.login}</span></span>
          <div>
            {
              issue.labels?.map((label) => (
                <span
                  key={label.id}
                  className='badge rounded-pill m-1'
                  style={{ backgroundColor: `#${label.color}` }}
                >
                  {label.name}
                </span>
              ))
            }
          </div>
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
