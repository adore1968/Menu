import React, { createContext, useContext, useState } from "react";
import data from "../data";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === category);
    setMenu(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu, categories, filterMenu }}>
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
