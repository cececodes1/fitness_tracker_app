import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from './store/exerciseSlice';
import './Exercises.css'; 

const Exercises = () => {
  const [exerciseName, setExerciseName] = useState('');
  const exercises = useSelector((state) => state.exercises);
  const dispatch = useDispatch();

  const handleAddExercise = () => {
    if (exerciseName) {
      dispatch(addExercise({ name: exerciseName }));
      setExerciseName('');
    }
  };

  const handleDeleteExercise = (index) => {
    dispatch(deleteExercise(index));
  };

  return (
    <div className="container mt-4">
      <h2>Add Your Exercises</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter exercise name"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={handleAddExercise}>Add Exercise</button>
        </div>
      </div>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div className="card mb-2" key={index}>
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>{exercise.name}</span>
              <button className="btn btn-danger" onClick={() => handleDeleteExercise(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercises;