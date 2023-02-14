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
    ['issueComments', id],
    () => getIssueComments(id)
  )

  return {
    issueQuery,
    issueCommentsQuery
  }
}
