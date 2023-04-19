import { useEffect, useMemo, useRef, useState } from 'react'

import { SortBy, type User } from './types.d'
import { UserList } from './components/UserList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.None)
  const [filterByCountry, setFilterByCountry] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // This is a way to store a value that will persist between renders
  const originalUsers = useRef<User[]>([])

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
    const filteredUsers = users.filter((user) => user.login.uuid !== id)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`https://randomuser.me/api/?results=10&seed=foobar&page=${currentPage}`)
      .then(async (res) => {
        if (!res.ok) throw new Error('Error fetching users')
        return await res.json()
      })
      .then((data) => {
        setUsers((prevUsers) => {
          const newUsers = [...prevUsers, ...data.results]
          originalUsers.current = newUsers
          return newUsers
        })
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

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

        <button type='button' onClick={handleReset}>
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
        {loading && <p>Loading...</p>}
        {(error != null) && <p>{error.message}</p>}
        {error == null && users.length === 0 && <p>No users found</p>}

        <button type='button' onClick={() => { setCurrentPage(currentPage + 1) }}>
          Load more
        </button>
      </main>

    </div>
  )
}

export default App
