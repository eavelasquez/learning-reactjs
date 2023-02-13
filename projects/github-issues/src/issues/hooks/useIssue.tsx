import { useQuery } from '@tanstack/react-query'

import { getIssue } from '../../api/github'

export const useIssue = (issueId: number) => {
  const issueQuery = useQuery(
    ['issue', issueId],
    () => getIssue(issueId),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  )

  return { ...issueQuery }
}
