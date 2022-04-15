import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import WorkoutContainer from "./components/WorkoutContainer";
import WorkoutForm from "./components/WorkoutForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL } from "./Globals";


const App = () => {
const [workout, setWorkout] = useState([])

const handleSubmit = (e) =>{
  e.preventDefault()
  
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
            <Route path="/workouts/new" element={<WorkoutForm/>}></Route>
            <Route path="/workouts" element={<WorkoutContainer workout={workout}/>}></Route>
          </Routes>
    </Router>
  );
}

export default App;
