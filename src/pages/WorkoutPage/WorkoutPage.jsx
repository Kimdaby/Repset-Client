import { useLocation } from "react-router-dom";
import Routine from "../../components/Routine/Routine";
import "./WorkoutPage.scss";

const WorkoutPage = () => {
  const location = useLocation();
  const newRoutine = location.state?.newRoutine;

  return (
    <div className="workout-page">
      <Routine newRoutine={newRoutine} />
    </div>
  );
};

export default WorkoutPage;
