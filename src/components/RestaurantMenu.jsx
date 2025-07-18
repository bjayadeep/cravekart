import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  if (!menuData) return <h3 style={{ textAlign: "center" }}>Loading menu...</h3>;

  const restaurantInfoCard = menuData?.cards?.find(
    (card) => card?.card?.card?.info
  );
  const { name, cuisines, costForTwoMessage } =
    restaurantInfoCard?.card?.card?.info || {};

  const itemCards =
    menuData?.cards
      ?.find((card) => card.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.flatMap((c) => c.card?.card?.itemCards || [])
      ?.slice(0, 20) || [];

  return (
    <div className="menu-container">
      <div className="restaurant-info">
        <h1 className="restaurant-name">{name}</h1>
        <p className="restaurant-meta">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <h2 className="menu-heading">Recommended</h2>
      <ul className="menu-list">
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <li className="menu-item" key={info.id}>
              <div className="menu-item-info">
                <div className="item-name">{info.name}</div>
                <div className="item-price">
                  ₹{info.price / 100 || info.defaultPrice / 100}
                </div>
              </div>
              {info.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info.imageId}`}
                  className="item-img"
                  alt={info.name}
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
