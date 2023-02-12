import { useRandom } from '../hooks/useRandom'

export const WithReactQuery = () => {
  const { isLoading, isError, isFetching, error, data, refetch } = useRandom()

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
