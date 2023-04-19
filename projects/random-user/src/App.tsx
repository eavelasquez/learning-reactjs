import { useMemo, useState } from 'react'

import { SortBy, type User } from './types.d'
import { UserList } from './components/UserList'
import { useInfiniteQuery } from '@tanstack/react-query'

const fetchRandomUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  const res = await fetch(`https://randomuser.me/api/?results=10&seed=foobar&page=${pageParam}`)
  if (!res.ok) throw new Error('Error fetching users')
  const data = await res.json()
  return {
    users: data.results,
    page: Number(data.info.page)
  }
}

function App () {
  const [filterByCountry, setFilterByCountry] = useState<string | null>(null)
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.None)

  const {
    isLoading,
    isError,
    data,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useInfiniteQuery<{
    users: User[]
    page: number
  }>(
    ['users'],
    async () => await fetchRandomUsers({ pageParam: 1 }),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.page < 10) return lastPage.page + 1
        return false
      },
      getPreviousPageParam: (firstPage) => {
        if (firstPage.page > 1) return firstPage.page - 1
        return false
      },
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 // 1 hour
    }
  )

  const users: User[] = data?.pages?.flatMap((page) => page.users) ?? []

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toogleSortByCountry = () => {
    setSorting(sorting === SortBy.None ? SortBy.Country : SortBy.None)
  }

  const handleChangeSorting = (sort: SortBy) => {
    setSorting(sort)
  }

  const handleDelete = (id: string) => {
    // const filteredUsers = users.filter((user) => user.login.uuid !== id)
    // setUsers(filteredUsers)
  }

  const handleReset = async () => {
    setFilterByCountry(null)
    setShowColors(false)
    setSorting(SortBy.None)
    await refetch()
  }

  const filteredUsers = useMemo(() => {
    return filterByCountry != null && filterByCountry.length > 0
      ? users.filter((user) => user.location.country.toLowerCase().includes(filterByCountry.toLowerCase()))
      : users
  }, [users, filterByCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.None) return filteredUsers

    const compareProperties: Record<string, (user: User) => string> = {
      [SortBy.First]: (user: User) => user.name.first,
      [SortBy.Last]: (user: User) => user.name.last,
      [SortBy.Country]: (user: User) => user.location.country
    }

    return filteredUsers.toSorted((a, b) => (
      compareProperties[sorting](a).localeCompare(compareProperties[sorting](b))
    ))
  }, [filteredUsers, sorting])

  return (
    <div className='App'>
      <h1>Random User</h1>
      <header>
        <button type='button' onClick={toggleColors}>
          {showColors ? 'Hide' : 'Show'} colors
        </button>

        <button type='button' onClick={toogleSortByCountry}>
          {sorting === SortBy.Country ? 'Default' : 'Sort by country'}
        </button>

        <button type='button' onClick={() => { void handleReset() }}>
          Reset
        </button>

        <input
          type='text'
          placeholder='Filter by country'
          onChange={(e) => { setFilterByCountry(e.target.value) }}
        />
      </header>

      <main>
        {users.length > 0 && (
          <UserList
            showColors={showColors}
            users={sortedUsers}
            changeSorting={handleChangeSorting}
            deleteUser={handleDelete}
          />
        )}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong</p>}
        {isError && users.length === 0 && <p>No users found</p>}

        <button type='button' onClick={() => { void fetchNextPage() }} disabled={!(hasNextPage ?? false)}>
          Load more
        </button>
      </main>

    </div>
  )
}

export default App
