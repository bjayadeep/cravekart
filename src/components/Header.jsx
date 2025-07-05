import logo from "../assets/logo.png";

const Header = () => {
  const logoText = "CraveKart";

  return (
    <div className="header">
      {/* Logo on the left */}
      <div className="logo-container">
        <img className="logo" src={logo} alt="CraveKart Logo" />
      </div>

      {/* CraveKart text in the middle */}
      <div className="logo-text">
        {logoText.split("").map((char, index) => (
          <span
            key={index}
            style={{
              color: index % 2 === 0 ? "#95c326" : "#1d1d1d",
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Nav items on the right */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
