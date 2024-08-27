import { createTheme } from "@mui/material/styles";

const Dark = createTheme({
  palette: {
    mode: "dark",
    background: {
      main: "#222",
    },
    text: {
      primary: "#fff",
    },
  },
});

export default Dark;
