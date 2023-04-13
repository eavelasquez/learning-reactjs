import { type User } from '../types.d'

interface UserListProps {
  showColors: boolean
  users: User[]
  deleteUser: (id: string) => void
}

export function UserList ({ showColors, users, deleteUser }: UserListProps) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Last name</th>
          <th>Country</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user, index) => {
          const bgColor = index % 2 === 0 ? '#333' : '#555'
          const color = showColors ? bgColor : 'transparent'

          return (
            <tr key={user.login.uuid} style={{ backgroundColor: color }}>
              <td>
                <img src={user.picture.thumbnail} alt={user.name.first} />
              </td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.location.country}</td>
              <td>
                <button type='button' onClick={() => { deleteUser(user.login.uuid) }}>
                  Delete
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
