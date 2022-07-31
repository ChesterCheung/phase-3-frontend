import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ExerciseList from "./components/ExerciseList";
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
  },[])

  useEffect(()=> {
    fetch(baseURL + "/workouts")
      .then(resp => resp.json())
      .then(data => setWorkouts(data))
  },[])

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise])
  }

  const addWorkout = (workout) => {
    console.log(workout)
    setWorkouts([...workouts, workout])
  }

  function handleUpdateExercise (updatedExercise) {
    const updated = exercises.map((exercise) => {
      if (exercise.id === updatedExercise.id) {
        return updatedExercise;
      } else {
        return exercise;
      }
    });
    setExercises(updated);
  }
  
  const deleteExercise = (exercise) => {
    setExercises(exercises.filter(e => e.id !== exercise.id)
  )}

  const handleDelete = (e) =>{
    fetch(`http://localhost:9292/exercises/${e.id}`,{
      method: "DELETE",
    })
      .then (resp => resp.json())
      .then((data) => {
        deleteExercise(data)
        if(workouts) {
        authorDeleteBlog(data)
        }
      })
  }

  const authorDeleteBlog = exercise => {
    setWorkouts(
      ...workouts,
      [workouts.exercises.filter(e => e.id !== exercise.id)]
    )
  }

  

  return (
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/exercises/new" element={<ExerciseForm setWorkouts={setWorkouts} addWorkout={addWorkout} addExercise={addExercise} setExercises={setExercises} baseURL={baseURL} workouts={workouts}/>}></Route>
            <Route path="/exercises" element={<ExerciseList handleUpdateExercise={handleUpdateExercise} handleDelete={handleDelete} exercises={exercises}/>}></Route>
            <Route path="/workouts" element={<WorkoutList workouts={workouts} />}> </Route>
          </Routes>
      </Router>
  );
}

export default App;
