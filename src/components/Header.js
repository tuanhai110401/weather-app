import { IconButton, Tooltip } from "@mui/material";
import "../styles/Header.scss";
import { useContext } from "react";
import { IoPartlySunny } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useThemeContext } from "../components/Theme/ThemeContext";
import { useNavigate } from "react-router-dom";
import { NavContext } from "../hooks/useNav";
import { useState } from "react";
function Header({ type }) {
  const { dataNav, setNav } = useContext(NavContext);
  const { theme, toggleTheme } = useThemeContext();
  const [opentMenu, setOpentMenu] = useState(false);
  const navigate = useNavigate();
  const handleMenuClick = (title, link) => {
    navigate(link);
    setNav(title);
  };
  const ButtonTheme = () => {
    return (
      <Tooltip title="Theme" placement="bottom">
        <IconButton
          className={`icon btn-theme ${
            theme.palette.mode === "light" ? "icon-sun" : "icon-moon"
          }`}
          onClick={toggleTheme}
        >
          {theme.palette.mode === "light" ? <IoPartlySunny /> : <FaMoon />}
        </IconButton>
      </Tooltip>
    );
  };
  return (
    <>
      <IconButton
        className="header-menu"
        sx={{ display: "none", color: "#000" }}
        onClick={() => setOpentMenu(!opentMenu)}
      >
        <CiMenuBurger />
      </IconButton>
      <div className={opentMenu ? "open" : ""}>
        <div className="header-wrapper">
          <h4 className="nav-logo">
            Weather<span>Hub</span>
          </h4>
          <div className="nav-wrapper">
            {dataNav.map((page, index) => (
              <IconButton
                className={`nav-btn ${page.isSelect ? "active" : ""}`}
                key={index}
                sx={{ color: "#5f5f5f" }}
                onClick={() => handleMenuClick(page.title, page.link)}
              >
                {page.title}
              </IconButton>
            ))}
            {type !== "DASHBOARD" && <ButtonTheme />}
          </div>
          {type === "DASHBOARD" && <ButtonTheme />}
        </div>
      </div>
    </>
  );
}
export default Header;
