import NavConfig from "./config-navbar";
import { Button, Tooltip } from "@mui/material";
import "../../../styles/Navbar.scss";
function Navbar() {
  return (
    <div className="nav-dashboard">
      {NavConfig.map((item) => (
        <Button
          variant="text"
          className="active"
          sx={{
            width: "100%",
            color: "#45474F",
            fontSize: "18px",
            fontWeight: "700",
            textTransform: "none",
            p: "18px 0",
            borderRadius: "18px",
          }}
        >
          {item.icon}
          {item.title}
        </Button>
      ))}
    </div>
  );
}

export default Navbar;
