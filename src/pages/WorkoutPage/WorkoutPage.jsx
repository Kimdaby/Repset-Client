import { useLocation } from "react-router-dom";
import Routine from "../../components/Routine/Routine";

const WorkoutPage = () => {
  const location = useLocation();
  const newRoutine = location.state?.newRoutine;

  return <Routine newRoutine={newRoutine} />;
};

export default WorkoutPage;
