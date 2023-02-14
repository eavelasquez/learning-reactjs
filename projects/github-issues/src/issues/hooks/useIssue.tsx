import { useQuery } from '@tanstack/react-query'

import { getIssue } from '../../api/github'

export const useIssue = (id: number) => {
  const issueQuery = useQuery(
    ['issue', id],
    () => getIssue(id),
    {
      refetchOnWindowFocus: false,
      staleTime: Infinity
    }
  )

  return { ...issueQuery }
}
