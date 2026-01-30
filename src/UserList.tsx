interface User {
  fullName: string
  email: string
  age: number
  role: string
}

interface Props {
  users: User[]
}

function UserList({ users }: Props) {
  if (users.length === 0) return <p>ยังไม่มีผู้สมัคร</p>

  return (
    <ul>
      {users.map((u, i) => (
        <li key={i}>
          {u.fullName} | {u.email} | {u.age} | {u.role}
        </li>
      ))}
    </ul>
  )
}

export default UserList
