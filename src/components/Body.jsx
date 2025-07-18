import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7447092&lng=83.2318634&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log("Full API cards:", json.data.cards);

    
    const restaurants =
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      ) || [];

    console.log("Extracted restaurants:", restaurants);

    setListOfRestaurants(restaurants); 
    setFilterRestaurants(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
    return(
      <h1>Oops! You are currently offline.</h1>
    )

  return listOfRestaurants.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="searchBox"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="searchBtn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter(
              (res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()) ||
                res.cuisines.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase())
                )
            );
            setFilterRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.46
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

<div className="res-container">
  {filterRestaurants.map((restaurant) => {
    const resInfo = restaurant;
    return (
      <Link
        to={`/restaurant/${resInfo.id}`}
        key={resInfo.id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <RestaurantCard restaurant={{ info: resInfo }} />
      </Link>
    );
  })}
</div>
</div>
  );
};

export default Body;
