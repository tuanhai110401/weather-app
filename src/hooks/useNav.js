import React, { createContext, useState } from "react";

export const NavContext = createContext();
const nav = [
  {
    title: "Home",
    link: "/",
    isSelect: true,
  },
  {
    title: "WeatherApp",
    link: "/dashboard/ho-chi-minh-city",
    isSelect: false,
  },
  {
    title: "About",
    link: "/about",
    isSelect: false,
  },
  {
    title: "Contact",
    link: "/contact",
    isSelect: false,
  },
];
export const NavProvider = ({ children }) => {
  const [dataNav, setDataNav] = useState(nav);

  const setNav = (title) => {
    const newState = dataNav.map((item) => {
      if (item.title === title) {
        return {
          ...item,
          isSelect: true,
        };
      } else {
        return {
          ...item,
          isSelect: false,
        };
      }
    });
    setDataNav(newState);
  };
  return (
    <NavContext.Provider value={{ dataNav, setNav }}>
      {children}
    </NavContext.Provider>
  );
};
