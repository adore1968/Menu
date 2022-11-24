import React from "react";
import { useGlobalContext } from "../context/AppContext";

function Category({ item }) {
  const { filterMenu } = useGlobalContext();
  return (
    <>
      <button onClick={() => filterMenu(item)}>{item}</button>
    </>
  );
}

export default Category;
