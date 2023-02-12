import { useQuery } from '@tanstack/react-query'

import { getRandomNumber } from '../services/random'

export const WithReactQuery = () => {
  const query = useQuery(['randomNumber'], getRandomNumber)
  const { isLoading, isError, isFetching, error, data, refetch } = query

  const handleClick = () => refetch()

  return (
    <>
      {isFetching ? <p>Loading...</p> : !isError && <p>Random Number: {data}</p>}
      {!isLoading && isError && <p>Something went wrong: {`${error}`}</p>}

      <button type='button' onClick={handleClick} disabled={isFetching}>
        {isFetching ? 'Loading...' : 'Get Random Number'}
      </button>
    </>
  )
}
