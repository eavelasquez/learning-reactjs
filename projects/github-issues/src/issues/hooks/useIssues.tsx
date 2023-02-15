import { useQuery } from '@tanstack/react-query'

import { getIssues } from '../../api/github'
import { State } from '../interfaces'

interface UseIssuesProps {
  state?: State
  labels?: string[]
}

export const useIssues = ({ state, labels }: UseIssuesProps) => {
  const issuesQuery = useQuery(
    ['issues', { state, labels }], // even the state or labels change, the same cache will be used
    () => getIssues({ state, labels }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5
    }
  )

  return { ...issuesQuery }
}
