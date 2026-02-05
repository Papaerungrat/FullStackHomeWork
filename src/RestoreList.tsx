export interface User {
  fullName: string
  email: string
  age: number
  role: string
}

interface Props {
  users: User[]
  onRestore: (index: number) => void
}

function RestoreList({ users, onRestore }: Props) {
  if (users.length === 0) return <p>ถังขยะว่าง</p>

  return (
    <ul className="user-list">
      {users.map((u, i) => (
        <li key={i} className="user-card">
          <strong>{u.fullName}</strong>
          <span>{u.email}</span>
          <span>Age: {u.age}</span>
          <span className="role">{u.role}</span>

          <button onClick={() => onRestore(i)}>♻️ กู้คืน</button>
        </li>
      ))}
    </ul>
  )
}

export default RestoreList
