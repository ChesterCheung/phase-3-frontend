import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ExerciseForm = ({baseURL, addExercise, workouts,}) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name:'',
    muscle_group:'',
    url:'',
    instructions:'',
    workout_id:''
  })

  

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(baseURL + "/exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then((exercise)=> addExercise(exercise))
    setFormData({name:'', muscle_group:'', url:'', instructions:'', workout_id:''})
    navigate("/exercises")
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
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
          name="muscle_group"
          aria-label="muscle_group"
          value={formData.muscle_group}
          onChange={handleChange}>
        </input>
        <label>Image URL</label>
        <input
          name="url"
          aria-label="url"
          value={formData.url}
          onChange={handleChange}>
        </input>
        <label>Description</label>
        <input
          type="text"
          name="instructions"
          aria-label="instructions"
          value={formData.instructions}
          onChange={handleChange}>
        </input>
        <label>Muscle Group</label>
        <select name="workout_id" onChange={handleChange}>
          <option>Select Muscle Group</option>
          {workouts.map(w => <option value={w.id}>{w.name}</option>)}
        </select>
        <input type="submit" value="Submit" />
      </form> 
    </div>
  )
}

export default ExerciseForm

     
