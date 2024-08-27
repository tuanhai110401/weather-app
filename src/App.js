import { useTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import { routes } from "./routers/router";
import { NavProvider } from "./hooks/useNav";

function App() {
  const theme = useTheme();
  const style = {
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.primary,
  };

  return (
    <NavProvider>
      <div style={style} className="App">
        <BrowserRouter>
          {/* <div className="home-header">
          <Header />
        </div> */}
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>

        <ToastContainer
          position="bottom-right"
          limit={3}
          autoClose={2000}
          closeOnClick
        />
      </div>
    </NavProvider>
  );
}

export default App;
