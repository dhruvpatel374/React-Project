import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constants";
import Restaurantcard from "./Restaurantcard";
import ShimmerCard from "./ShimmerCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState();
  const [filteredList, setFilteredList] = useState();
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRestaurantList();
  }, []);
  const fetchRestaurantList = async () => {
    try {
      setIsLoading(true);
      // Getting data from the swiggy api
      const data = await fetch(RES_URL);
      // converting data to json format
      const json = await data.json();
      // checking data until card not found
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      // await json data
      const resData = await checkJsonData(json);

      setListOfRestaurant(resData);
      setFilteredList(resData);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(isLoading);
  return (
    // Search bar
    <div className="bg-[#fcfcfc] relative py-8">
      <div className="flex gap-4 max-w-[560px] w-[95%] mx-auto ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for Restaurants..."
          className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-orange-400 text-white p-2 px-8 rounded-md"
          onClick={() => {
            // Filter the restraunt cards and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurant.filter((res) => {
              return (
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                res.info.cuisines
                  .join(",")
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
            });

            setFilteredList(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="container-max ">
        <h1 className="my-4 font-bold text-3xl">Restaurant List</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* {filteredList?.map((restaurant) => {
            return (
              <Restaurantcard key={restaurant.info.id} resData={restaurant} />
            );
          })} */}
          {isLoading
            ? Array.from({ length: 15 }).map((_, i) => <ShimmerCard key={i} />)
            : filteredList.map((restaurant, i) => (
                <Restaurantcard key={restaurant.info.id} resData={restaurant} />
              ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
