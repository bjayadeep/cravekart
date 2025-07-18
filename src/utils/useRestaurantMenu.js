import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7447092&lng=83.2318634&restaurantId=${resId}`
      );
      const json = await data.json();
      setMenuData(json.data);
    };

    fetchData();
  }, [resId]); 

  return menuData;
};

export default useRestaurantMenu;
