import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from "../utils/cartSlice";

// Single menu item
function MenuItemCard({ info, price }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const maxChars = 100;

  const shortDescription =
    info.description?.length > maxChars
      ? info.description.slice(0, maxChars) + "..."
      : info.description;

  const handleAddItem = () => {
    const item = {
      id: info.id,
      name: info.name,
      price: price,
      imageId: info.imageId,
    };
    dispatch(addItem(item));
  };

  return (
    <li className="flex justify-between items-start gap-4 border-b pb-4">
      <div className="flex-1">
        <p className="font-semibold text-lg">{info.name}</p>
        <p className="text-gray-800 font-medium mt-1">₹{price}</p>
        {info.description && (
          <p className="text-gray-500 text-sm mt-2 leading-snug">
            {expanded ? info.description : shortDescription}
            {info.description.length > maxChars && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-green-600 ml-1 font-medium hover:underline"
              >
                {expanded ? "less" : "more"}
              </button>
            )}
          </p>
        )}
      </div>
      {info.imageId && (
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-md"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info.imageId}`}
            alt={info.name}
          />
          <button
            className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-semibold px-4 py-1 rounded shadow-md border border-gray-200 hover:bg-green-50"
            onClick={handleAddItem}
          >
            ADD
          </button>
        </div>
      )}
    </li>
  );
}

// Category accordion
export default function RestaurantCategoryCard({ category, isOpen, onToggle }) {
  return (
    <div className="border rounded-lg mb-4 shadow-sm">
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
      >
        <span className="font-semibold text-lg">
          {category.card.card.title}
        </span>
        <span className="text-xl">
          {isOpen ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-up"></i>
          )}
        </span>
      </button>

      {isOpen && (
        <ul className="p-4 space-y-4">
          {category.card.card.itemCards.map((item) => {
            const info = item.card.info;
            const price = (info.price ?? info.defaultPrice ?? 0) / 100;
            return (
              <MenuItemCard
                key={info.id}
                info={info}
                price={price}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
