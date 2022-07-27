import React from 'react'
import ExerciseCard from './ExerciseCard'

const ExerciseContainer = ({exercises, handleDelete}) => {
  const exerciseCards= exercises.map(exercises => <h1 key={exercises.id}><ExerciseCard handleDelete={handleDelete} exercises={exercises}/></h1>)
  return (
    <div>
    {exerciseCards}
    </div>
  );
}

export default ExerciseContainer