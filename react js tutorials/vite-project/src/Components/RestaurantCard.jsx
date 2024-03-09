import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "./utils/UserContext";
import { bannerImg } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  sla,
  headerItems,
  costForTwo,
  avgRating,
}) => {
  // const { user } = useContext(UserContext);
  return (
    <div>
      <div>{headerItems.imageId}</div>
      <div className=" border border-solid border-black  hover:scale-95  duration-300 p-4 rounded-2xl">
        <img className="rounded-[20px]" src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="text-xl font-semibold mt-3">{name}</h2>
        <div className="my-1">
          <span className="bg-green-600 p-1 rounded-xl font-bold  mr-2 text-white">
            {avgRating}
          </span>
          <span className="font-bold ">.{sla.deliveryTime} min</span>
        </div>
        <h5 className="mt-1">{cuisines.join(", ")}</h5>
        <h6>{area}</h6>

        <h4 className="font-bold text-xl my-1">{costForTwo}</h4>
        {/* <h5>{user.name}</h5>
        <h5>{user.email}</h5> */}
      </div>
    </div>
  );
};

export default RestaurantCard;
