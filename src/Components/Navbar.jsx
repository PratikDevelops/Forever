import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import { ShopContext } from "../Context/ShopContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setShowSearch, cart } = useContext(ShopContext);
  const location = useLocation();
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/collection") {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location.pathname, setShowSearch]);

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="navbar-logo" />
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? "line-open" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "line-open" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "line-open" : ""}`}></div>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "menu-open" : ""}`}>
          <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={closeMenu}>
            <p>Home</p>
            <hr />
          </NavLink>
          <NavLink to="/collection" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={closeMenu}>
            <p>Collection</p>
            <hr />
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={closeMenu}>
            <p>About</p>
            <hr />
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} onClick={closeMenu}>
            <p>Contact</p>
            <hr />
          </NavLink>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="navbar-icons">
          {location.pathname === "/collection" && (
            <div className="search-icon">
              <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="Search" />
            </div>
          )}
          <Link to="/cart">
            <div className="cart-icon">
              <img src={assets.cart_icon} alt="Cart" />
              {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
