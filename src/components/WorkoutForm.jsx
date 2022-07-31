import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../Globals';

const WorkoutForm = ({addWorkout}) => {
  const navigate = useNavigate()
  const [workoutName, setWorkoutName] = useState([])
  const [workoutDescription, setWorkoutDescription] = useState([])

  const handleWorkoutSubmit = (e) =>{
    e.preventDefault()
    fetch(baseURL + "/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: workoutName, description: workoutDescription}),
    })
      .then(r => r.json())
      .then((workout)=> addWorkout(workout))
    navigate("/workouts")
  }

  return (
    <div>
      <div>
      <form onSubmit={handleWorkoutSubmit} style= {{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label>Workout Name</label>
        <input
          type="text"
          name="workout_name"
          aria-label="workout_name"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}>
        </input>
        <label>Description</label>
        <input
          name="description"
          aria-label="description"
          value={workoutDescription}
          onChange={(e) => setWorkoutDescription(e.target.value)}>
        </input>
        <input type="submit" value="Submit" />
      </form> 
      </div>
    </div>
  )
}

export default WorkoutForm