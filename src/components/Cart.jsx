import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const getPrice = (item) => {
    const rawPrice = item.price ?? item.defaultPrice ?? 0;
    return rawPrice >= 1000 ? rawPrice / 100 : rawPrice;  // ✅ add closing brace
  };

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + getPrice(item), 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="border p-4 mb-3 rounded shadow">
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹{getPrice(item).toFixed(2)} × 1</p>
              <p className="mb-2">Total: ₹{getPrice(item).toFixed(2)}</p>
              <button
                onClick={() => handleRemove(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          <hr className="my-4" />
          <h2 className="text-xl font-bold">
            Total Amount: ₹{totalAmount.toFixed(2)}
          </h2>

          <button
            onClick={() => dispatch(clearCart())}
            className="bg-black text-white px-4 py-2 mt-4 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
