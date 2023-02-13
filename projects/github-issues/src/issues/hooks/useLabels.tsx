import { useQuery } from '@tanstack/react-query';

import { getLabels } from '../../api/github';

export const useLabels = () => {
  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 // 1 hour
    }
  )

  return { ...labelsQuery }
}
