import Restaurantcard from "./Restaurantcard";
import { useState } from "react";
import resList from "../utils/mockdata";

const RestaurantList = () => {
  const [restaurant, setresofList] = useState(resList);
  return (
    <div className="container-max ">
      <h1 className="my-4 font-bold text-3xl">Restaurant List</h1>
      <button
        className="bg-orange-400 text-white p-2 px-8 rounded-md m-2 "
        onClick={() => {
          const filteredList = resList.filter((res) => res.data.avgRating > 4);
          setresofList(filteredList);
          console.log(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {restaurant.map((restaurant) => (
          <Restaurantcard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantList;
