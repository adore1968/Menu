import React from "react";
import { useGlobalContext } from "../context/AppContext";
import MenuItem from "./MenuItem";

function Menu() {
  const { menu } = useGlobalContext();
  return (
    <div className="flex flex-wrap justify-center">
      {menu.map((item) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Menu;
