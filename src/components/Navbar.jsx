import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <i onClick={() => setNav(!nav)} class="text-2xl fa-solid fa-bars"></i>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <i class="text-xl fa-solid fa-magnifying-glass"></i>
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <i class=" text-xl mx-2 fa-solid fa-cart-shopping"></i>
        Cart
      </button>

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
