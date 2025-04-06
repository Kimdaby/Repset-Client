import React, { useEffect, useState } from "react";
import "./ExerciseForm.scss";

const ExerciseForm = ({ onSaveRoutine, initialRoutine }) => {
  const [routine, setRoutine] = useState("");
  const [exercises, setExercises] = useState([
    { name: "", sets: "", reps: "", weight: "" },
  ]);

  useEffect(() => {
    if (initialRoutine) {
      setRoutine(initialRoutine.name || "");
      setExercises(initialRoutine.exercises || []);
    }
  }, [initialRoutine]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...exercises];
    updated[index][name] = value;
    setExercises(updated);
  };

  const handleAddExercise = () => {
    setExercises((prev) => [
      ...prev,
      { name: "", sets: "", reps: "", weight: "" },
    ]);
  };

  const handleDeleteExercise = (index) => {
    setExercises((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (!routine.trim()) return alert("Please enter a routine name.");
    if (exercises.some((ex) => !ex.name.trim()))
      return alert("Please enter all exercise names.");

    onSaveRoutine?.(routine, exercises);
  };

  return (
    <div className="exercise-form">
      <h2>Workout Builder</h2>

      {exercises.map((exercise, index) => (
        <div key={index} className="exercise-form__group">
          {index === 0 && (
            <div className="exercise-form__field">
              <label htmlFor="routine">Routine Name</label>
              <input
                id="routine"
                type="text"
                name="routine"
                value={routine}
                onChange={(e) => setRoutine(e.target.value)}
                placeholder="Enter routine name"
                className="exercise-form__input full"
              />
            </div>
          )}

          <div className="exercise-form__header">
            <div className="exercise-form__field full">
              <label htmlFor={`exercise-${index}`}>Exercise Name</label>
              <input
                id={`exercise-${index}`}
                type="text"
                name="name"
                value={exercise.name}
                onChange={(e) => handleChange(index, e)}
                placeholder="Enter exercise name"
                className="exercise-form__input full"
              />
            </div>

            {exercises.length > 1 && (
              <button
                className="exercise-form__delete-btn"
                onClick={() => handleDeleteExercise(index)}
              >
                DELETE
              </button>
            )}
          </div>

          <div className="exercise-form__row">
            <div className="exercise-form__field">
              <label htmlFor={`sets-${index}`}>Sets</label>
              <input
                id={`sets-${index}`}
                type="number"
                name="sets"
                value={exercise.sets}
                onChange={(e) => handleChange(index, e)}
                placeholder="Sets"
                className="exercise-form__input"
              />
            </div>

            <div className="exercise-form__field">
              <label htmlFor={`reps-${index}`}>Reps</label>
              <input
                id={`reps-${index}`}
                type="number"
                name="reps"
                value={exercise.reps}
                onChange={(e) => handleChange(index, e)}
                placeholder="Reps"
                className="exercise-form__input"
              />
            </div>

            <div className="exercise-form__field">
              <label htmlFor={`weight-${index}`}>Weight (lbs)</label>
              <input
                id={`weight-${index}`}
                type="number"
                name="weight"
                value={exercise.weight}
                onChange={(e) => handleChange(index, e)}
                placeholder="Weight"
                className="exercise-form__input"
              />
            </div>
          </div>
        </div>
      ))}

      <div className="exercise-form__actions">
        <button className="exercise-form__add-btn" onClick={handleAddExercise}>
          + Add Exercise
        </button>
        <button className="exercise-form__save-btn" onClick={handleSave}>
          Save Workout
        </button>
      </div>
    </div>
  );
};

export default ExerciseForm;
