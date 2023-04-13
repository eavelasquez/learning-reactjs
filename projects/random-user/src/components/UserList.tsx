import { type User } from '../types.d'

interface UserListProps {
  users: User[]
}

export function UserList ({ users }: UserListProps) {
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
        {users.map((user) => (
          <tr key={user.login.uuid}>
            <td>
              <img src={user.picture.thumbnail} alt={user.name.first} />
            </td>
            <td>{user.name.first}</td>
            <td>{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
