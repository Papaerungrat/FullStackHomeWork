import { useState } from "react"
interface User {
  fullName: string
  email: string
  age: number
  role: string
}
interface Props {
  onAddUser: (user: User) => void
}
function UserForm({ onAddUser }: Props) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState(0)
  const [role, setRole] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!fullName || !email || !role || age === 0) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง")
      return
    }

    if (age < 10 || age > 99) {
      setError("อายุต้องอยู่ระหว่าง 10 - 99")
      return
    }

    onAddUser({
      fullName,
      email,
      age,
      role,
    })
    setFullName("")
    setEmail("")
    setAge(0)
    setRole("")
    setError("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="FullName"
        name = "fullname"
        aria-label="fullname"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        placeholder="Email"
         name = "email"
        aria-label="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age (10-99)"
        name = "age"
        aria-label="age"
        value={age || ""}
        onChange={(e) => setAge(Number(e.target.value))}
      /> 
      <select name="role"aria-label="role"value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">-- เลือกตำแหน่ง --</option>
        <option value="front-end">front end</option>
        <option value="back-end">back end</option>
        <option value="designer">designer</option>
      </select>

      {error && (
        <p>{error}</p>
      )}

      <button type="submit" aria-label="submit">ส่ง</button>
    </form>
  )
}

export default UserForm
