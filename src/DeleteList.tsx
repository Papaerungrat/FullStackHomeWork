export interface User {
  fullName: string
  email: string
  age: number
  role: string
}

interface Props {
  users: User[]
  onDelete: (index: number) => void
}

function DeleteList({ users, onDelete }: Props) {
  if (users.length === 0) return <p>ยังไม่มีข้อมูลให้ลบ</p>

  return (
    <ul className="user-list">
      {users.map((u, i) => (
        <li key={i} className="user-card">
          <strong>{u.fullName}</strong>
          <span>{u.email}</span>
          <span>Age: {u.age}</span>
          <span className="role">{u.role}</span>

          <button onClick={() => onDelete(i)}>🗑 ลบ</button>
        </li>
      ))}
    </ul>
  )
}

export default DeleteList
