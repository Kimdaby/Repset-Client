import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>RepSet</h1>
      </div>
      <div className="header__nav">
        <MenuIcon sx={{ fontSize: 32 }} />
      </div>
    </header>
  );
};

export default Header;
