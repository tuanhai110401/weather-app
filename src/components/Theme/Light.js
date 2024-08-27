import { createTheme } from "@mui/material/styles";

const Light = createTheme({
  palette: {
    mode: "light",
    background: {
      main: "#fff",
    },
    text: {
      primary: "#000",
    },
  },
});

export default Light;
