import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Routine.scss";

const Routine = ({ newRoutine }) => {
  const navigate = useNavigate();
  const [routines, setRoutines] = useState([]);

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedRoutines")) || [];
    setRoutines(saved);
  }, []);

  useEffect(() => {
    if (newRoutine && Array.isArray(newRoutine.exercises)) {
      setRoutines((prev) => {
        const exists = prev.find((r) => r.id === newRoutine.id);
        const updated = exists
          ? prev.map((r) => (r.id === newRoutine.id ? newRoutine : r))
          : [...prev, newRoutine];

        localStorage.setItem("savedRoutines", JSON.stringify(updated));
        return updated;
      });
    }
  }, [newRoutine]);

  const handleAddRoutine = () => {
    navigate("/routine/new");
  };

  const handleEditRoutine = (routine) => {
    navigate("/routine/new", { state: { routineToEdit: routine } });
  };

  const handleAddToToday = (routine) => {
    const today = getTodayDate();
    const saved = JSON.parse(localStorage.getItem("dailyWorkouts")) || {};
    const updated = {
      ...saved,
      [today]: [...(saved[today] || []), routine],
    };
    localStorage.setItem("dailyWorkouts", JSON.stringify(updated));
    navigate("/");
  };

  const handleDeleteRoutine = (id) => {
    const filtered = routines.filter((r) => r.id !== id);
    setRoutines(filtered);
    localStorage.setItem("savedRoutines", JSON.stringify(filtered));
  };

  return (
    <div className="routine">
      <div className="routine__header">
        <h2 className="routine__title">Routine</h2>
        <button className="routine__add-button" onClick={handleAddRoutine}>
          +
        </button>
      </div>

      {routines.length === 0 && <p>No routines saved yet.</p>}

      {routines.map((routine) => (
        <div key={routine.id} className="routine__card">
          <div className="routine__card-header">
            <h4>{routine.name}</h4>
          </div>

          <div className="routine__exercise-list">
            {routine.exercises.map((ex, index) => (
              <div key={index} className="routine__exercise">
                <span>{ex.name}</span>
                <span>
                  {ex.sets} sets × {ex.reps} reps @ {ex.weight} lbs
                </span>
              </div>
            ))}
          </div>

          <div className="routine__card-actions">
            <button
              className="routine__button routine__button--edit"
              onClick={() => handleEditRoutine(routine)}
            >
              Edit
            </button>
            <button
              className="routine__button routine__button--add"
              onClick={() => handleAddToToday(routine)}
            >
              Add
            </button>
            <button
              className="routine__button routine__button--delete"
              onClick={() => handleDeleteRoutine(routine.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Routine;
