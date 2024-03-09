import { useState, useEffect } from "react";
import { menuAPI } from "../../constants";

const useRestaurant = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      menuAPI + resId
      //this api has a id=425 which is hotel Empire Restaurant Menu, if we want to display different restaurant Menu we have only that id changed. so we have to define our /restaurants/:resId that if this route id is 425 load hotel Empire menu if 229 load meghna food menu etc etc.for this we haave one hook called useParams
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurant;
