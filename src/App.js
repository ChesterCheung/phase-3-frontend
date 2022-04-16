import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WorkoutContainer from "./components/WorkoutContainer";
import WorkoutForm from "./components/WorkoutForm";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL } from "./Globals";


const App = () => {
const [workout, setWorkout] = useState([])
const [formData, setFormData] = useState({
  name:'',
  muscle:'',
  image:'',
  description:''
})

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
  console.log(formData)
}
const handleDelete = (workoutObj) =>{
  fetch(`http://localhost:4000/workouts/${workoutObj.id}`,{
    method: "DELETE"
})
.then(()=>{
  const filteredWorkouts = workout.filter(exercise => exercise.id !== workoutObj.id)
  setWorkout(filteredWorkouts)
  console.log(filteredWorkouts)
})
}

useEffect(()=> {
  fetch(baseURL + "/workouts")
  .then(resp => resp.json())
  .then(data => setWorkout(data))
},[])

  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/workouts/new" element={<WorkoutForm handleChange={handleChange} baseURL={baseURL} formData={formData}/>}></Route>
            <Route path="/workouts" element={<WorkoutContainer handleDelete={handleDelete} workout={workout}/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
