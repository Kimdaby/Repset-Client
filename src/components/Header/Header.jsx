import { useNavigate } from "react-router-dom";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import muscleIcon from "../../assets/images/cardio-workout.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__logo">
        <img src={muscleIcon} alt="Muscle Icon" className="header__muscle" />
        <h1>RepSet</h1>
      </div>
      <div className="header__nav">
        <CalendarMonthIcon
          sx={{ fontSize: 32, cursor: "pointer" }}
          onClick={() => navigate("/calendar")}
        />
        <MenuIcon
          sx={{ fontSize: 32, cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>
    </header>
  );
};

export default Header;
