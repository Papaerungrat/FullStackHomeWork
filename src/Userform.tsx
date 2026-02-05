import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

interface User {
  fullName: string
  email: string
  age: number
  role: string
}

interface Props {
  onAddUser: (user: User) => void
}

const validationSchema = Yup.object({
  fullName: Yup.string().required(),
  email: Yup.string().email().required(),
  age: Yup.number().min(10).max(99).required(),
  role: Yup.string().required(),
})

function UserForm({ onAddUser }: Props) {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        age: "",
        role: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddUser({
          fullName: values.fullName,
          email: values.email,
          age: Number(values.age),
          role: values.role,
        })
        resetForm()
      }}
    >
      {() => (
        <Form>
          <Field
            name="fullName"
            placeholder="Full Name"
            required
          />

          <Field
            name="email"
            placeholder="Email"
            required
          />

          <Field
            type="number"
            name="age"
            placeholder="Age (10-99)"
            required
            min="10"
            max="99"
          />

          <Field as="select" name="role" required>
            <option value="">-- เลือกตำแหน่ง --</option>
            <option value="front-end">front end</option>
            <option value="back-end">back end</option>
            <option value="designer">designer</option>
          </Field>

          <button type="submit">ส่ง</button>
        </Form>
      )}
    </Formik>
  )
}

export default UserForm
