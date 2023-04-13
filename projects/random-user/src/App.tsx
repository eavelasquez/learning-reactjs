import { useEffect, useMemo, useRef, useState } from 'react'

import { SortBy, type User } from './types.d'
import { UserList } from './components/UserList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sorting, setSorting] = useState<SortBy>(SortBy.None)
  const [filterByCountry, setFilterByCountry] = useState<string | null>(null)

  // This is a way to store a value that will persist between renders
  const originalUsers = useRef<User[]>([])

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toogleSortByCountry = () => {
    setSorting(sorting === SortBy.None ? SortBy.Country : SortBy.None)
  }

  const handleDelete = (id: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== id)
    setUsers(filteredUsers)
  }

  const handleReset = () => {
    setUsers(originalUsers.current)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async (res) => await res.json())
      .then((data) => {
        setUsers(data.results)
        originalUsers.current = data.results
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const filteredUsers = useMemo(() => {
    return filterByCountry != null && filterByCountry.length > 0
      ? users.filter((user) => user.location.country.toLowerCase().includes(filterByCountry.toLowerCase()))
      : users
  }, [users, filterByCountry])

  const sortedUsers = useMemo(() => {
    return sorting === SortBy.Country
      ? filteredUsers.toSorted((a, b) => a.location.country.localeCompare(b.location.country))
      : filteredUsers
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

      {users.length > 0 && (
        <UserList
          showColors={showColors}
          users={sortedUsers}
          deleteUser={handleDelete}
        />
      )}

      {users.length === 0 && <p>Loading...</p>}
    </div>
  )
}

export default App
