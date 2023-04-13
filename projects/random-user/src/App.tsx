import { useEffect, useState } from 'react'
import { UserList } from './components/UserList'

function App () {
  const [users, setUsers] = useState([])

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

  return (
    <div className='App'>
      <h1>Random User</h1>
      {users.length > 0 ? <UserList users={users} /> : <p>Loading...</p>}
    </div>
  )
}

export default App
