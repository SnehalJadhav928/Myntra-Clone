import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";

function Navbar({ cartItems }) {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://www.realtynmore.com/wp-content/uploads/2022/04/Myntra-1.png"
            alt="Logo"
          />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          {/* <li>
            <Link to="/beauty">Beauty</Link>
          </li> */}
        </ul>
        <div>
          <i className="fa-solid fa-magnifying-glass"></i>

          <input type="text" placeholder="Search for product, brands and more" className="search" />
        </div>
        <div className="icon2">
          <Link to="/login"><i className="fa-regular fa-user"></i></Link>

          {/* <i className="fa-regular fa-heart"></i> */}
          <Link to="/bag" className="bag-icon">
            🛍️
            {cartItems.length > 0 && (  // ✅ Show count only if cart is not empty

              <i class="fa-solid fa-bag-shopping" className="cart-count"> {cartItems.length}</i>
            )}
          </Link>

        </div>
      </div>


    </>
  );
}

export default Navbar;
