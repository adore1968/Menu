import React from "react";

function MenuItem({ item }) {
  return (
    <div>
      <div>
        <img src={item.img} alt={item.title} />
      </div>
      <div>
        <div>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </div>
        <div>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
