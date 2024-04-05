import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import '../styles/Forms.css'

const UpdatePetForm = () => {
  const { petId } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    age: '',
  })
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // Update this to call your server to retrieve the pet info
  useEffect(() => {
    
  }, [petId])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  // Update this to call your server to update the pet
  const handleSubmit = (e) => {
    e.preventDefault()

  }

  if (isLoading) return <div>🐱 No pet found! 🐶</div>
  if (error) return <div>Error: {error}</div>

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
        <button type="submit">Update</button>

        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>

    </form>
  )
}

export default UpdatePetForm
