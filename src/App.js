import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WorkoutContainer from "./components/WorkoutContainer";
import WorkoutForm from "./components/WorkoutForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL } from "./Globals";


const App = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(()=> {
    fetch(baseURL + "/workouts")
      .then(resp => resp.json())
      .then(data => setWorkouts(data))
  },[])

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout])
  }

  const handleDelete = (workoutObj) =>{
    fetch(`http://localhost:4000/workouts/${workoutObj.id}`,{
      method: "DELETE"
    })
      .then(()=>{
        const filteredWorkouts = workouts.filter(exercise => exercise.id !== workoutObj.id)
        setWorkouts(filteredWorkouts)
      })
  }

  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/workouts/new" element={<WorkoutForm addWorkout={addWorkout} setWorkouts={setWorkouts} baseURL={baseURL}/>}></Route>
            <Route path="/workouts" element={<WorkoutContainer handleDelete={handleDelete} workouts={workouts}/>}></Route>
          </Routes>
      </Router>
  );
}

export default App;
