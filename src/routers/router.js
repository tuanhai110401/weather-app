import Home from "../pages/Home/Home";
import WeatherDashboard from "../pages/WeatherDashboard/WeatherDashboard";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard/:placeID",
    element: <WeatherDashboard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
