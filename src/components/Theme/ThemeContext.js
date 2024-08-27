import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Dark from "./Dark";
import Light from "./Light";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const Theme = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const theme = darkMode ? Dark : Light;

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
