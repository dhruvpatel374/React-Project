import RestaurantList from "./RestaurantList";
import { useState } from "react";
import resList from "../utils/mockdata";
const Body = () => {
  return (
    // Search bar
    <div className="bg-[#fcfcfc] relative py-8">
      <div className="flex gap-4 max-w-[560px] w-[95%] mx-auto">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for Restaurants..."
          className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow"
        />
        <button className="bg-orange-400 text-white p-2 px-8 rounded-md">
          Search
        </button>
      </div>

      <RestaurantList />
    </div>
  );
};
export default Body;
