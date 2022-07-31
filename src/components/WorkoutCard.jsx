import React from 'react'


const styles ={
    color: 'black',
    fontSize: '20px',
    border: '2px solid black'
  }

const WorkoutCard = ({workouts}) => {
 const exerciseNames = workouts.exercises.map((e) => <ul key={e.id}>{e.name}: {e.instructions}</ul> )
  return (
    <div>
        <h4 style={styles} >Workout: {workouts.name}</h4>
        <p style= {{fontSize: '15px'}}>Description: {workouts.description}</p>
        <li style= {{fontSize: '15px'}}>Exercises:{exerciseNames}</li>
        
    </div> 
  )
}

export default WorkoutCard
