function RestaurantCard({ restaurant }) {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating, sla } = restaurant.info;

  return (
    <div className="w-64 bg-white rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{cuisines.join(", ")}</p>
        <div className="flex items-center mt-2 text-green-600 font-medium">
          ⭐ {avgRating} • {sla.slaString}
        </div>
        <p className="text-xs text-gray-500">{areaName}</p>
      </div>
    </div>
  );
}


export default RestaurantCard;
