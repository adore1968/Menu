import React from "react";

function MenuItem({ item }) {
  return (
    <div className="container max-w-lg flex m-2 p-2">
      <div className="mr-5">
        <img src={item.img} alt={item.title} className="h-full" />
      </div>
      <div>
        <div className="flex justify-between pb-2 border-b border-opacity-50">
          <h2 className="text-lg sm:text-xl capitalize">{item.title}</h2>
          <p className="text-base sm:text-lg text-red-500">${item.price}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg sm:text-xl capitalize">{item.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
