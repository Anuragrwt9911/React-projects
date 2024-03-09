import React, { useState } from "react";

const Navbar = ({
  searchText,
  setSearchText,
  FilterFood,
  setShowComponent,
}) => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <i onClick={() => setNav(!nav)} class="text-2xl fa-solid fa-bars"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Food <span className="font-bold text-orange-700">Villa</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <i
          onClick={() => {
            FilterFood(searchText);
          }}
          class="text-xl fa-solid fa-magnifying-glass"
        ></i>
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      {/* Cart button */}
      <ul className=" flex justify-between w-[450px] items-center font-[600] text-xl cursor-pointer text-black">
        <li className="bg-orange-600 text-white px-3 py-2 rounded-full hover:bg-orange-700 ">
          Home
        </li>
        <li className="bg-orange-600 text-white px-3 py-2 rounded-full hover:bg-orange-700 ">
          About Us
        </li>
        <li className="bg-orange-600 text-white px-3 py-2 rounded-full hover:bg-orange-700 ">
          Contact Us
        </li>
        <li className="bg-orange-600 text-white px-3 py-2 rounded-full hover:bg-orange-700">
          <i class=" text-xl  fa-solid fa-cart-shopping"></i>
          <span className="font-[400] p-1 text-xl">Cart</span>
        </li>
      </ul>

      {/**Mobile Menu */}
      {/** Overlay */}
      {nav ? (
        <div className="bg-black/55 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/**side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <i
          onClick={() => setNav(!nav)}
          class="text-2xl absolute right-4 top-4 cursor-pointer fa-regular fa-circle-xmark"
        ></i>
        <h2 className="text-3xl p-4">
          Best <span className=" text-3xl font-bold">Eats</span>{" "}
        </h2>
        {/**list items */}
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex ">
              <i class="text-[25px] mr-4 fa-solid fa-truck"></i> Orders
            </li>
            <li className="text-xl py-4 flex ">
              <i class="text-[25px] mr-4 fa-solid fa-star"></i> Favorites
            </li>
            <li className="text-xl py-4 flex ">
              <i class="text-[25px] mr-4 fa-solid fa-wallet"></i> Wallet
            </li>
            <li className="text-xl py-4 flex ">
              <i class="text-[25px] mr-4 fa-solid fa-question"></i> Help
            </li>
            <li className="text-xl py-4 flex ">
              <i class="text-[25px] mr-4 fa-solid fa-rectangle-ad"></i>
              Promotions
            </li>
            <li className="text-xl py-4 flex ">
              <i class="text-[25px] mr-4 fa-solid fa-face-smile"></i> Best Ones
            </li>
            <li className="text-xl py-4 flex ">
              <i class="text-[25px] mr-4 fa-solid fa-users"></i> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
