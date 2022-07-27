import React from 'react'
import WorkoutCard from './WorkoutCard'

const WorkoutList = ({workouts}) => {
    const workoutCards = workouts.map(workouts => <h1 key={workouts.id}> <WorkoutCard workouts={workouts}/></h1>)
  return (
    <div>
        {workoutCards}
    </div>
  )
}

export default WorkoutList