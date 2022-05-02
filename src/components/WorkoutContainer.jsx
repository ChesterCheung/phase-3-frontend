import React from 'react'
import WorkoutCard from './WorkoutCard'

const WorkoutContainer = ({workouts, handleDelete}) => {
  const workoutCards= workouts.map(workouts => <h1 key={workouts.id}><WorkoutCard handleDelete={handleDelete} workouts={workouts}/></h1>)
  return (
    <div>
    {workoutCards}
    </div>
  );
}

export default WorkoutContainer