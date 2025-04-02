import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import CalendarPage from "./pages/Calendar/Calendarpage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SingleCalendarPage from "./pages/SingleCalendarPage/SingleCalendarPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/workout" element={<SingleCalendarPage />} />
        <Route path="/progress" element={<SingleCalendarPage />} />
        <Route path="/profile" element={<SingleCalendarPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
