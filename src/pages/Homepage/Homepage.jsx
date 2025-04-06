import { useEffect, useState } from "react";
import SingleDayWorkout from "../../components/SingleDayWorkout/SingleDayWorkout";
import WeekStrip from "../../components/WeekStrip/WeekStrip";
import Quote from "../../components/Quote/Quote";
import "./HomePage.scss";

const getTodayDate = () => new Date().toISOString().split("T")[0];

const HomePage = () => {
  const [todayRoutines, setTodayRoutines] = useState([]);
  const todayDate = new Date();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("dailyWorkouts")) || {};
    const todayKey = getTodayDate();
    setTodayRoutines(saved[todayKey] || []);
  }, []);

  return (
    <div className="homepage">
      <WeekStrip />
      <SingleDayWorkout date={todayDate} routines={todayRoutines} />
      <Quote />
    </div>
  );
};

export default HomePage;
