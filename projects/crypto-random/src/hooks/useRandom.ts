import { useQuery } from '@tanstack/react-query'
import { getRandomNumber } from '../services/random'

export const useRandom = () => {
  const query = useQuery(['randomNumber'], getRandomNumber)
  return { ...query }
}
