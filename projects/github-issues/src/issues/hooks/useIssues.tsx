// import { useEffect, useState } from 'react'
// import { useQuery } from '@tanstack/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'

import { getIssues } from '../../api/github'
import { State } from '../interfaces'

interface UseIssuesProps {
  state?: State
  labels?: string[]
}

// const useIssuesWithPagination = ({ state, labels }: UseIssuesProps) => {
//   const [page, setPage] = useState(1)

//   useEffect(() => setPage(1), [state, labels])

//   const issuesQuery = useQuery(
//     ['issues', { state, labels, page }], // even the state or labels change, the same cache will be used
//     () => getIssues({ state, labels, page }),
//     {
//       refetchOnWindowFocus: false,
//       staleTime: 1000 * 60 * 5
//     }
//   )

//   const updatePage = (newPage: number) => setPage(newPage)

//   const nextPage = () => {
//     if (issuesQuery.data && issuesQuery.data.length) updatePage(page + 1)
//   }

//   const prevPage = () => {
//     if (page > 1) updatePage(page - 1)
//   }

//   return {
//     ...issuesQuery,
//     page: issuesQuery.isFetching ? 'Loading...' : page,
//     nextPage,
//     prevPage
//   }
// }

const useIssuesWithInfiniteScroll = ({ state, labels }: UseIssuesProps) => {
  const issuesQuery = useInfiniteQuery(
    ['issues', { state, labels }],
    ({ queryKey, pageParam }) => {
      const [, args] = queryKey
      return getIssues({ ...args as any, page: pageParam })
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length) return pages.length + 1
        return undefined // no more pages
      }
    }
  )

  return issuesQuery
}

export const useIssues = ({ state, labels }: UseIssuesProps) => {
  // return useIssuesWithPagination({ state, labels })
  return useIssuesWithInfiniteScroll({ state, labels })
}
