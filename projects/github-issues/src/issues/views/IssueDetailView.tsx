import { Link, Navigate, useParams } from 'react-router-dom'

import { IssueComment } from '../components'
import { LoadingIcon } from '../../shared/components'
import { useIssue } from '../hooks'

export const IssueDetailView = () => {
  const { id = '' } = useParams<{ id: string }>()
  const { issueQuery, issueCommentsQuery } = useIssue(parseInt(id))
  const { data: issue, isLoading: isLoadingIssue } = issueQuery
  const { data: comments, isLoading: isLoadingComments } = issueCommentsQuery

  if (isLoadingIssue) return <LoadingIcon />
  if (!issue) return <Navigate to='./issues/list' />

  return (
    <div className='row mb-5'>
      <div className='col-12 mb-3'>
        <Link to='./issues/list'>Go Back</Link>
      </div>

      {isLoadingComments && <LoadingIcon />}
      {comments?.length === 0 && <div className='col-12'>No comments</div>}
      {
        comments?.map((comment) => (
          <div className='col-12 mb-3' key={comment.id}>
            <IssueComment issue={comment} />
          </div>
        ))
      }
    </div>
  )
}
