import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ExerciseContainer from "./components/ExerciseContainer";
import ExerciseForm from "./components/ExerciseForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL } from "./Globals";
import WorkoutList from "./components/WorkoutList";


const App = () => {
  const [exercises, setExercises] = useState([])
  const [workouts, setWorkouts] = useState([])

  useEffect(()=> {
    fetch(baseURL + "/exercises")
      .then(resp => resp.json())
      .then(data => setExercises(data))

      fetch(baseURL + "/workouts")
      .then(resp => resp.json())
      .then(data => setWorkouts(data))

  },[])

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise])
  }

  const workoutDeleteExercise = exercise => {
    setWorkouts({
      ...workouts,
      exercises: workouts.exercises.filter(e => e.id !== exercise.id)
    })
  }
  
  
  const handleDelete = (workoutObj) =>{
    fetch(`http://localhost:9292/exercises/${workoutObj.id}`,{
      method: "DELETE"
    })
      .then(()=>{
        const filteredWorkouts = exercises.filter(exercise => exercise.id !== workoutObj.id)
        setExercises(filteredWorkouts)
      })
  }

  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/exercises/new" element={<ExerciseForm addExercise={addExercise} setExercises={setExercises} baseURL={baseURL} workouts={workouts}/>}></Route>
            <Route path="/exercises" element={<ExerciseContainer workoutDeleteExercise={workoutDeleteExercise} handleDelete={handleDelete} exercises={exercises}/>}></Route>
            <Route path="/workouts" element={<WorkoutList workouts={workouts} />}> </Route>
          </Routes>
      </Router>
  );
}

export default App;
