import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Forms.css'

const AddPetForm = ({ onPetAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    age: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  // Update this to call your server to add a new pet
  const handleSubmit = (e) => {
    e.preventDefault()

    
  }

  return (
    <form className="pet-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Type:
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>

      <div className="form-buttons">
        <button type="submit">Submit</button>

        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>

    </form>
  )
}

export default AddPetForm
