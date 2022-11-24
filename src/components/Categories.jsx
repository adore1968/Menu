import React from "react";
import { useGlobalContext } from "../context/AppContext";
import Category from "./Category";

function Categories() {
  const { categories } = useGlobalContext();
  return (
    <div>
      {categories.map((item, index) => {
        return <Category key={index} item={item} />;
      })}
    </div>
  );
}

export default Categories;
