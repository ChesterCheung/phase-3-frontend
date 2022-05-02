import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkoutForm = ({formData, handleChange, setFormData, baseURL, setWorkout}) => {
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(baseURL + "/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then(console.log(formData))
    setFormData({name:'', muscle:'', image:'', description:''})
    navigate("/workouts")
    fetch(baseURL + "/workouts")
      .then(resp => resp.json())
      .then(data => setWorkout(data))
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} style= {{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          aria-label="name"
          value={formData.name}
          onChange={handleChange}>
        </input>
        <label>Muscle</label>
        <input
          type="text"
          name="muscle"
          aria-label="muscle"
          value={formData.muscle}
          onChange={handleChange}>
        </input>
        <label>Image URL</label>
        <input
          name="image"
          aria-label="image"
          value={formData.image}
          onChange={handleChange}>
        </input>
        <label>Description</label>
        <input
          type="text"
          name="description"
          aria-label="description"
          value={formData.description}
          onChange={handleChange}>
        </input>
        <input type="submit" />
      </form> 
    </div>
  )
}

export default WorkoutForm

     
