import { useEffect, useState } from 'react'

import { type User } from './types'
import { UserList } from './components/UserList'

function App () {
  const [users, setUsers] = useState<User[]>([])
  const [showColors, setShowColors] = useState(false)
  const [sortByCountry, setSortByCountry] = useState(false)

  const toggleColors = () => {
    setShowColors(!showColors)
  }

  const toogleSortByCountry = () => {
    setSortByCountry((prev) => !prev)
  }

  const handleDelete = (id: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== id)
    setUsers(filteredUsers)
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(async (res) => await res.json())
      .then((data) => {
        setUsers(data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const sortedUsers = sortByCountry
    ? users.toSorted((a, b) => a.location.country.localeCompare(b.location.country))
    : users

  return (
    <div className='App'>
      <h1>Random User</h1>
      <header>
        <button type='button' onClick={toggleColors}>
          {showColors ? 'Hide' : 'Show'} colors
        </button>

        <button type='button' onClick={toogleSortByCountry}>
          {sortByCountry ? 'Default' : 'Sort by country'}
        </button>
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
