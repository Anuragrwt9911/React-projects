// Title component for display logo
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";

const Title = () => (
  <a href="/">
    <img
      className="bg-cover size-20  "
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-restaurant-logo%2C-restaurant-logo-design-template-33255790cb8e1186b28609dd9afd4ee6_screen.jpg?ts=1668794604"
      alt="logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // const { user } = useContext(UserContext);
  return (
    <div className="max-w-[1240px] flex items-center justify-between bg-blue-400 text-white ">
      <Title />
      {/* <p>{user.name}</p> */}
      <div className="w-[500px] mx-10 ">
        <ul className="flex justify-between items-center p-3">
          <li className="font-semibold  text-xl hover:text-orange-600 duration-200 p-1 ">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold  text-xl hover:text-orange-600 duration-200 p-1 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="font-semibold  text-xl hover:text-orange-600 duration-200 p-1 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="font-semibold  text-xl hover:text-orange-600 duration-200 p-1 ">
            <i className="fa-solid fa-cart-shopping">Cart</i>
          </li>
          <li className="font-semibold  text-xl hover:text-orange-600 duration-200 p-1 ">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
