import { restaurantList } from "../constants";

const RestaurantCard = ({ food, restaurant }) => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <div className="px-3 py-2 flex justify-center items-center my-4">
        <h1 className="x-4 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
          Top <span className="text-orange-700">Menus</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mx-12">
        {/**filtering conditions */}

        {restaurant.length > 0 ? (
          restaurantList.map((item, index) => {
            return (
              <div
                key={index}
                className="border-shadow-lg rounded-lg hover:scale-105 duration-300"
              >
                <img
                  className="w-full h-[200px] object-cover rounded-t-lg"
                  src={item.img}
                  alt={item.name}
                />
                <div className="flex justify-between px-2 py-4">
                  <p className="font-bold ">{item.name}</p>
                  <p>
                    <span className="bg-orange-500 text-white p-1 rounded-full">
                      {item.city}
                    </span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <>
            <p className="text-2xl text-red-900">
              No matches found for your search
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
