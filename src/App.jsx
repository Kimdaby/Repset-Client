import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import CalendarPage from "./pages/CalendarPage/Calendarpage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DataPage from "./pages/DataPage/DataPage";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage";
import TimerPage from "./pages/TimerPage/TimerPage";
import ExercisePage from "./pages/ExercisePage/ExercisePage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/progress" element={<DataPage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/routine/:id" element={<ExercisePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
