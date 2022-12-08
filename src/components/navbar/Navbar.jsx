import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

// data of website
import data from "../../data/data";
const salonName = data.name;

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleClick = () => {
    setShowMobileNav((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      {window.innerWidth <= 800 ? (
        <>
          <div className="mobile-navbar">
            <Link to="/" className="mobile-navbar_logo">
              {salonName}
            </Link>
            <button className="mobile-navbar_togler" onClick={handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul className={`mobile-nav ${!showMobileNav && "hide-mobile-nav"}`}>
            <li className="mobile-nav_item">
              <Link to="/take-turn" className="mobile-nav_item_link">
                نوبت دهی
              </Link>
            </li>
            <li className="mobile-nav_item">
              <Link to="/cost" className="mobile-nav_item_link">
                حدود هزینه
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <ul className="larg-nav">
          <li className="larg-nav_item">
            <Link to="/take-turn" className="larg-nav_item_link">
              نوبت دهی
            </Link>
          </li>
          <li className="larg-nav_logo">
            <Link to="/" className="larg-nav_logo_link">
              {salonName}
            </Link>
          </li>
          <li className="larg-nav_item">
            <Link to="/cost" className="larg-nav_item_link">
              حدود هزینه
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
