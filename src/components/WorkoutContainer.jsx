import React from 'react'
import WorkoutCard from './WorkoutCard'

const WorkoutContainer = ({workout}) => {
  const workoutCards= workout.map(workout => <h1><WorkoutCard key={workout.id} workout={workout}/></h1>)
  return (
    <div>
    {workoutCards}
    </div>
  )
}

export default WorkoutContainer