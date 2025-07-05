import StarIcon from "./StarRatingIcon";

const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, sla } = restaurant.info;

  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        className="res-img"
      />
      <div className="res-name">{name}</div>
      <div className="res-rating">
        <div className="star-icon">
          <StarIcon />
        </div>
        <div className="order-time">{avgRating} ~ {sla.slaString}</div>
      </div>
      <div className="res-qui">{cuisines.join(", ")}</div>
      <div className="res-place">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;