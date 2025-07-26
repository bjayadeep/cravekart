import logo from "../assets/logo.png";
import nameImage from "../assets/name.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector } from "react-redux";

export default function Header() {
  const [logBtnName, setLogBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-8">
        <div className="flex items-center space-x-3 sm:space-x-6">
          <img className="w-14 h-auto" src={logo} alt="Logo" />
          <img
            className="w-40 sm:w-60 h-auto"
            src={nameImage}
            alt="CraveKart"
          />
        </div>

        {!isOnline && (
          <p className="text-sm font-medium text-red-600 mr-4 hidden sm:block">
            ⚠ Offline
          </p>
        )}

        <nav>
          <ul className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-medium text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-2 sm:px-3 hover:text-blue-600 ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="px-2 sm:px-3 hover:text-blue-600">
                About me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="px-2 sm:px-3 hover:text-blue-600"
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/cart" className="px-2 sm:px-3 hover:text-blue-600">
                <i className="fas fa-shopping-cart mr-1"></i>
                Cart{cartItems.length > 0 ? ` - ${cartItems.length}` : ""}
              </NavLink>
            </li>
            <li>
              <button
                className="ml-2 rounded-md border border-blue-600 px-3 py-1 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                onClick={() =>
                  setLogBtnName(logBtnName === "Login" ? "Logout" : "Login")
                }
              >
                {logBtnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {!isOnline && (
        <div className="sm:hidden text-center text-xs text-red-600 pb-2">
          ⚠ You are offline!
        </div>
      )}
    </header>
  );
}
