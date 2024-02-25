import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [food, setfood] = useState(data);

  //filter types -> burgers/pizaa etc
  const filterType = (category) => {
    setfood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter by price
  const filterPrice = (price) => {
    setfood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 border-orange-800 font-bold text-4xl text-center">
        Top Rated Menus
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        {/**Filter types */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => setfood(data)}
              className="m-1  text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salad
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/**filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-center max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/**Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 ">
        {food.map((item, index) => {
          return (
            <div
              key={index}
              className="border-shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold ">{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
