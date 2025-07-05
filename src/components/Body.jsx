import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "./data";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurnants, setListOfRestaurant] = useState(restaurantList);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.4
            );
            //console.log(filteredList);
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container"> 
        {listOfRestaurnants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
