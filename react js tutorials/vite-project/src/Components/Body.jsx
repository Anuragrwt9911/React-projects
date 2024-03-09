import RestaurantCard from "./RestaurantCard";
import {
  useContext,
  useEffect,
  useState,
} from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useOnline from "./utils/useOnline";
import { RestaurantCards } from "../constants";
import UserContext from "./utils/UserContext";

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useContext(UserContext);

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);
  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(RestaurantCards);
      const json = await response.json();
      console.log(json);

      const headerItems =
        json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      console.log(headerItems);

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  //check if user is offline then it shows that message for that we have made a custom hook -> useOnline hook
  const isOnline = useOnline();
  if (!isOnline) {
    console.log("Offline: Rendering message");
    return (
      <div className="flex justify-center items-center h-screen">
        <span>Offline, Plz check your internet Connection!!!</span>
      </div>
    );
  }
  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="bg-slate-50 my-4 flex justify-center items-center">
        <input
          type="text"
          className="p-4 border-2 border-solid border-black rounded-full focus:outline-none w-[500px] font-medium text-lg"
          placeholder="Search for restaurants"
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        {/* <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: "new email",
            })
          }
        /> */}
        <button
          className="rounded-full p-4 w-28 bg-blue-400 hover:bg-blue-700 text-white font-medium  text-xl duration-300 "
          onClick={() => {
            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div class="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" grid grid-rows-3 grid-cols-3 sm:grid-cols-4 mx-24 bg-slate-50 p-4 gap-y-6 gap-x-8  my-3">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurants/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
              >
                <RestaurantCard
                  headerItems={headerItems}
                  {...restaurant?.info}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
