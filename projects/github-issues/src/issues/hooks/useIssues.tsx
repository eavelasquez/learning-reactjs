import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getIssues } from '../../api/github'
import { State } from '../interfaces'

interface UseIssuesProps {
  state?: State
  labels?: string[]
}

export const useIssues = ({ state, labels }: UseIssuesProps) => {
  const [page, setPage] = useState(1)

  const issuesQuery = useQuery(
    ['issues', { state, labels, page }], // even the state or labels change, the same cache will be used
    () => getIssues({ state, labels, page }),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5
    }
  )

  const updatePage = (newPage: number) => setPage(newPage)

  const nextPage = () => {
    if (issuesQuery.data && issuesQuery.data.length) updatePage(page + 1)
  }

  const prevPage = () => {
    if (page > 1) updatePage(page - 1)
  }

  return { issuesQuery, page, nextPage, prevPage }
}
