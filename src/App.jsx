import React from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <section className="px-5 sm:px-8 pt-16 pb-5">
        <div className="flex flex-col justify-center items-center mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold mb-5">Our Menu</h1>
          <Categories />
        </div>
        <div className="flex justify-center">
          <Menu />
        </div>
      </section>
    </div>
  );
}

export default App;
