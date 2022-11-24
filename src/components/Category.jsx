import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Category({ item }) {
  const { filterMenu } = useGlobalContext();
  return (
    <>
      <button
        onClick={() => filterMenu(item)}
        className="text-lg sm:text-xl capitalize mr-5 last:mr-0 hover:text-red-500 transition-colors"
      >
        {item}
      </button>
    </>
  );
}

export default Category;
