import { useQuery } from '@tanstack/react-query'

import { getIssues } from '../../api/github'

export const useIssues = () => {
  const issuesQuery = useQuery(
    ['issues'],
    getIssues,
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5
    }
  )

  return { ...issuesQuery }
}
