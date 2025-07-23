import { useState } from "react";

export default function MenuItemCard({ info, price, onAdd }) {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 100;

  const shortDescription =
    info.description?.length > maxChars
      ? info.description.slice(0, maxChars) + "..."
      : info.description;

  return (
    <li className="flex justify-between items-start gap-4 border-b pb-4">
      {/* Left Section */}
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

      {/* Right Section - Image with ADD button */}
      {info.imageId && (
        <div className="relative w-32 h-32 flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-md"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info.imageId}`}
            alt={info.name}
          />
          <button
            className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-semibold px-4 py-1 rounded shadow-md border border-gray-200 hover:bg-green-50"
            onClick={() => onAdd?.(info)}
          >
            ADD
          </button>
        </div>
      )}
    </li>
  );
}
