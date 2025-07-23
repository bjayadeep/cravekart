import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmar"; 
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import withTopRatedLabel from "./withTopRatedLabel";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withTopRatedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7447092&lng=83.2318634&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

   
    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      ) || [];

    setListOfRestaurants(restaurants);
    setFilterRestaurants(restaurants);
  };

  if (onlineStatus === false) {
    return (
      <h1 className="mt-10 text-center text-xl font-semibold text-red-600">
        Oops! You are currently offline.
      </h1>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = () => {
    const q = searchText.trim().toLowerCase();
    const filteredRestaurant = listOfRestaurants.filter(
      (res) =>
        res.name.toLowerCase().includes(q) ||
        res.cuisines.some((cuisine) => cuisine.toLowerCase().includes(q))
    );
    setFilterRestaurants(filteredRestaurant);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestaurants.filter((res) => +res.avgRating > 4.46);
    setFilterRestaurants(filteredList);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
        <div className="flex w-full sm:w-auto gap-2">
          <input
            type="text"
            className="w-full sm:w-64 rounded border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search restaurants or cuisines..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className="rounded bg-lime-500 px-4 py-2 text-sm font-semibold text-white hover:bg-lime-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <button
          className="self-start sm:self-auto rounded border border-yellow-500 px-4 py-2 text-sm font-medium text-yellow-700 hover:bg-yellow-50 transition"
          onClick={handleTopRated}
        >
          Top Rated
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filterRestaurants.map((resInfo) => (
          <Link
            to={`/restaurant/${resInfo.id}`}
            key={resInfo.id}
            className="no-underline text-inherit"
          >
            {+resInfo.avgRating > 4.46 ? (
  <RestaurantCardPromoted restaurant={{ info: resInfo }} />
) : (
  <RestaurantCard restaurant={{ info: resInfo }} />
)}

          </Link>
        ))}
      </div>
    </div>
  ); 
};

export default Body;
