import { useQuery } from '@tanstack/react-query'

import { getIssue, getIssueComments } from '../../api/github'

export const useIssue = (id: number) => {
  const issueQuery = useQuery(
    ['issue', id],
    () => getIssue(id),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  )

  const issueCommentsQuery = useQuery(
    ['issue', id, 'comments'],
    () => getIssueComments(id),
    {
      enabled: !!issueQuery.data,
      refetchOnWindowFocus: false
    }
  )

  return {
    issueQuery,
    issueCommentsQuery
  }
}
