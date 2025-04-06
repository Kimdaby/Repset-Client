import { useNavigate } from "react-router-dom";
import "./SingleDayWorkout.scss";

const SingleDayWorkout = ({ date, routines }) => {
  const navigate = useNavigate();

  const handleAddWorkout = () => {
    navigate("/workout");
  };

  const handleDelete = (index) => {
    const todayKey = new Date().toISOString().split("T")[0];
    const saved = JSON.parse(localStorage.getItem("dailyWorkouts")) || {};
    const updated = [...(saved[todayKey] || [])];
    updated.splice(index, 1);
    saved[todayKey] = updated;
    localStorage.setItem("dailyWorkouts", JSON.stringify(saved));
    window.location.reload();
  };

  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
      }).format(date)
    : "No date selected";

  return (
    <div className="single-day-workout">
      <div className="single-day-workout__header">
        <h2 className="single-day-workout__title">{formattedDate}</h2>
        <button
          className="single-day-workout__add-button"
          onClick={handleAddWorkout}
        >
          +
        </button>
      </div>

      {routines.length > 0 ? (
        routines.map((routine, i) => {
          const totalExercises = routine.exercises.length;
          const totalVolume = routine.exercises.reduce((total, ex) => {
            const reps = Number(ex.reps) || 0;
            const weight = Number(ex.weight) || 0;
            return total + reps * weight;
          }, 0);

          return (
            <div className="single-day-workout__card" key={i}>
              <div className="single-day-workout__card-header">
                <h4>{routine.name}</h4>
              </div>

              <div className="single-day-workout__summary">
                <p>
                  {totalExercises} exercise{totalExercises > 1 ? "s" : ""}
                </p>
                <p>Total Volume: {totalVolume} lbs</p>
              </div>

              <div className="single-day-workout__exercise-list">
                {routine.exercises.map((ex, j) => (
                  <div key={j} className="single-day-workout__exercise">
                    <span>{ex.name}</span>
                    <span>
                      {ex.sets} sets × {ex.reps} reps @ {ex.weight} lbs
                    </span>
                  </div>
                ))}
              </div>

              <div className="single-day-workout__card-actions">
                <button
                  className="single-day-workout__button single-day-workout__button--add"
                  onClick={() => handleDelete(i)}
                >
                  🗑️
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-state">
          <p>No workouts logged yet.</p>
          <p>“Let’s get that first rep in 💪”</p>
        </div>
      )}
    </div>
  );
};

export default SingleDayWorkout;
