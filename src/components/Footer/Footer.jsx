import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__home">
          <HomeFilledIcon sx={{ fontSize: 32 }} />
        </div>
        <div className="footer__workout">
          <FitnessCenterIcon sx={{ fontSize: 32 }} />
        </div>
        <div className="footer__calender">
          <CalendarMonthIcon sx={{ fontSize: 32 }} />
        </div>
        <div className="footer__setting">
          <SettingsIcon sx={{ fontSize: 32 }} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
