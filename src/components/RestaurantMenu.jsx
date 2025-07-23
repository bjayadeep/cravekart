import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategoryCard from "./RestaurantCategoryCard";

export default function RestaurantMenu() {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(null);

  // Show loading state until data is fetched
  if (!menuData) {
    return (
      <h3 className="mt-20 text-center text-lg font-medium text-gray-600">
        Loading menu...
      </h3>
    );
  }

  // Extract restaurant info
  const restaurantInfoCard = menuData?.cards?.find(
    (card) => card?.card?.card?.info
  );
  const { name, cuisines, costForTwoMessage } =
    restaurantInfoCard?.card?.card?.info || {};

  // Extract all categories with items
  const categories =
    menuData?.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Restaurant Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-600 mt-2">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      {/* Render each category as accordion */}
      {categories.map((category, idx) => (
        <RestaurantCategoryCard
          key={idx}
          category={category}
          isOpen={openIndex === idx}
          onToggle={() =>
            setOpenIndex(openIndex === idx ? null : idx)
          }
        />
      ))}
    </div>
  );
}
