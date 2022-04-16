import React from 'react'
import WorkoutCard from './WorkoutCard'

const WorkoutContainer = ({workout, handleDelete}) => {
  const workoutCards= workout.map(workout => <h1><WorkoutCard handleDelete={handleDelete} key={workout.id} workout={workout}/></h1>)
  return (
    <div>
    {workoutCards}
    </div>
  )
}

export default WorkoutContainer