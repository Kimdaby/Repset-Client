import { useNavigate } from "react-router-dom";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import BarChartIcon from "@mui/icons-material/BarChart";
import TimerIcon from "@mui/icons-material/Timer";
import "./Footer.scss";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer__home" onClick={() => navigate("/")}>
        <HomeFilledIcon sx={{ fontSize: 32, cursor: "pointer" }} />
      </div>
      <div className="footer__workout" onClick={() => navigate("/workout")}>
        <FitnessCenterIcon sx={{ fontSize: 32, cursor: "pointer" }} />
      </div>
      <div className="footer__chart" onClick={() => navigate("/progress")}>
        <BarChartIcon sx={{ fontSize: 32, cursor: "pointer" }} />
      </div>
      <div className="footer__profile" onClick={() => navigate("/timer")}>
        <TimerIcon sx={{ fontSize: 32, cursor: "pointer" }} />
      </div>
    </footer>
  );
};

export default Footer;
