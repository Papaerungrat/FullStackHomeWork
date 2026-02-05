import { useState } from "react"
import UserForm from "./Userform"
import UserList from "./UserList"
import RestoreList from "./RestoreList"
import "./App.css"

export interface User {
  fullName: string
  email: string
  age: number
  role: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [trash, setTrash] = useState<User[]>([])

  const addUser = (user: User) => {
    setUsers([...users, user])
  }
  
  const deleteUser = (index: number) => {
    const deleted = users[index]
    setTrash([...trash, deleted])
    setUsers(users.filter((_, i) => i !== index))
  }

  const restoreUser = (index: number) => {
    const restored = trash[index]
    setUsers([...users, restored])
    setTrash(trash.filter((_, i) => i !== index))
  }

  return (
    <div className="app-container">
      <h2>สมัครงาน Full-stack</h2>

      <UserForm onAddUser={addUser} />

      <hr />

      <h3>รายชื่อผู้สมัคร</h3>
      <UserList users={users} onDelete={deleteUser} />

      <hr />

      <h3>ถังขยะ (กู้คืนได้)</h3>
      <RestoreList users={trash} onRestore={restoreUser} />
    </div>
  )
}

export default App
