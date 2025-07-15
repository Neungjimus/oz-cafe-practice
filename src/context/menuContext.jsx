import { createContext, useState, useContext } from "react";
import menuData from "../assets/data"; 

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(menuData);

  return (
    <MenuContext.Provider value={{ menu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  return useContext(MenuContext);
}
