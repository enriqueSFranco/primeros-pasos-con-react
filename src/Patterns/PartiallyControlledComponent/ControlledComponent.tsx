import { useState } from "react"

const INITIAL_STATE = {
  name: '',
  lastname: '',
  age: 0
}

const ControlledComponent = () => {
  const [form, updatedForm] = useState(INITIAL_STATE)

  function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    updatedForm({
      ...form,
      [name]: value
    })
  }

  return (
    <div>
      <h2>ControlledComponent</h2>
      <input value={form.name} onChange={handleChange} type="text" />
      <input value={form.lastname} onChange={handleChange} type="text" />
      <input value={form.age} onChange={handleChange} type="text" />
    </div>
  )
}

export default ControlledComponent