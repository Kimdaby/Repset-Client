import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExerciseForm from "../../components/ExerciseForm/ExerciseForm";

const ExercisePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const routineToEdit = location.state?.routineToEdit;

  const handleSaveRoutine = (routineName, exercises) => {
    const newRoutine = {
      id: routineToEdit?.id || Date.now(),
      name: routineName,
      exercises,
    };

    navigate("/workout", { state: { newRoutine } });
  };

  return (
    <div className="exercise-page">
      <ExerciseForm
        onSaveRoutine={handleSaveRoutine}
        initialRoutine={routineToEdit}
      />
    </div>
  );
};

export default ExercisePage;
