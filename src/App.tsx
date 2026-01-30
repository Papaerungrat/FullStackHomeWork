import { useState } from "react"
import UserForm from "./Userform.tsx"
import UserList from "./UserList"
import "./App.css"

interface User {
  fullName: string
  email: string
  age: number
  role: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])

  return (
    <div className="app-container">
      <h2>สมัครงาน Full-stack</h2>

      <UserForm onAddUser={(user) => setUsers([...users, user])} />

      <hr />

      <h3>รายชื่อผู้สมัคร</h3>
      <UserList users={users} />
    </div>
  )
}

export default App
