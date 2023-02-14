import { Link, Navigate, useParams } from 'react-router-dom'

import { IssueComment } from '../components'
import { LoadingIcon } from '../../shared/components'
import { useIssue } from '../hooks'

export const IssueDetailView = () => {
  const { id = '' } = useParams<{ id: string }>()
  const { data, isLoading } = useIssue(parseInt(id))

  if (isLoading) return <LoadingIcon />
  if (!data) return <Navigate to='./issues/list' />

  return (
    <div className='row mb-5'>
      <div className='col-12 mb-3'>
        <Link to='./issues/list'>Go Back</Link>
      </div>
      <IssueComment issue={data} />
    </div>
  )
}
