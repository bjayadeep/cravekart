import logo from "../assets/logo.png";
import nameImage from "../assets/name.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()  => {
 
  const [logBtnName , setLogBtnName] = useState("Login");

  return (
    <div className="header">

      <div className="logo-container">
        <img className="logo" src={logo} alt="CraveKart Logo" />
      </div>

      <div className="name-container">
        <img className="name-img" src={nameImage} alt="CraveKart" />
      </div>


      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">About Us</Link>
          </li>
          <li>
            <Link to="Contact" className="nav-link">Contact Us</Link>
          </li>
          <li>
            <Link to="Cart" className="nav-link">Cart</Link>
          </li>
          <li>
            <button
            className="login-btn"
            onClick={() => {
              setLogBtnName(logBtnName === "Login" ? "Logout" : "Login");
            }}
          >
            {logBtnName}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
