import React from 'react'
import ExerciseCard from './ExerciseCard'

const ExerciseList = ({exercises, handleDelete, handleUpdateExercise}) => {
  
  const exerciseCards= exercises.map(exercises => <h1 key={exercises.id}><ExerciseCard handleUpdateExercise={handleUpdateExercise} handleDelete={handleDelete} exercises={exercises}/></h1>)
  return (
    <div>
    {exerciseCards}
    </div>
  );
}

export default ExerciseList