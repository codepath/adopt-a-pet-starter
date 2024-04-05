import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PetCard from './PetCard'
import '../styles/Pets.css'

const PetsList = ({ filters }) => {
  const [pets, setPets] = useState([])
  const [error, setError] = useState('')
  const navigate = useNavigate()

  // Update this to call your server to filter pets
  useEffect(() => {
    
  }, [filters])

  // Update this to call your server to delete a pet
  const handleDelete = (id) => {
    
  }

  const handleUpdate = (id) => {
    navigate(`/update-pet/${id}`)
  }

  if (error) return <div>Error: {error}</div>
  if (!pets.length) return <div>🐶 No pets found! 🐱</div>

  return (
    <div className="pets-container">
      {pets.map(pet => (
        <PetCard 
          key={pet.id}
          pet={pet}
          onUpdate={() => handleUpdate(pet.id)}
          onDelete={() => handleDelete(pet.id)}
        />
      ))}
    </div>
  )
}

export default PetsList
