import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import RestaurantCard from "./Components/RestaurantCard";
import Shimmer from "./Components/Shimmer";
import UserContext from "./Components/utils/UserContext";
// import Instamart from "./Components/Instamart";

const Instamart = lazy(() => import("./Components/Instamart"));
// AppLayout component to render: Header, Body, and Footer Component
const AppLayout = () => {
  // const [user, setUser] = useState({
  //   name: "Akshay Kumar",
  //   email: "rawatanurag838@gmail.com",
  // });

  // useEffect(() => {}, []);
  return (
    <div className="bg-slate-50">
      {/* <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      > */}
      <Header />
      <Outlet />
      <Footer />
      {/* </UserContext.Provider> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Instamart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
