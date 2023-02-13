import { useQuery } from '@tanstack/react-query';

import { getLabels } from '../../api/github';

export const useLabels = () => {
  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    { refetchOnWindowFocus: false }
  )

  return { ...labelsQuery }
}
