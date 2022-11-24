import React from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <section>
        <div>
          <h1>Our Menu</h1>
          <Categories />
        </div>
        <Menu />
      </section>
    </div>
  );
}

export default App;
