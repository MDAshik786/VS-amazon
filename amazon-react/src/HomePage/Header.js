import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdLocationPin } from "react-icons/md";
import SignInDropDown from "./SignInDropDown";
const Header = ({ state }) => {
  const [isAcive, setIsActive] = useState(false);
  return (
    <div className="header">
      <div className="left-header">
        <div className="img-container">
          <Link to={"/"} className="logo">
            <img
              src="images/amazon-logo-white.png"
              alt=""
              className="main-logo"
            />
            <span className="in">.in</span>
          </Link>
        </div>
        <div className="location-container">
          <p className="hello">Hello</p>
          <div className="inside-location">
            <MdLocationPin className="loaction-icon" />
            <span>Select your address</span>
          </div>
        </div>
      </div>
      <div className="middle-header">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-bar">
          <img src="images//icons/search-icon.png" className="img" />
        </button>
      </div>
      <div className="right-header">
        <Link>
          <div
            className="sign-in-link"
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            <div className="all-list-container">
              <p className="singn-in">Hello, sign in</p>
              <p className="account-lists">Account & Lists
              <span class="material-symbols-outlined">arrow_drop_down</span>
              </p>
            </div>
            {isAcive && <SignInDropDown />}
          </div>
        </Link>
        <Link to={"/"} className="return">
          <div className="all-list-container">
            <p className="return-text">Returns</p>
            <p className="order-text">& Orders</p>
          </div>
        </Link>
        <Link to={"/cart"} className="cart">
          <div className="all-list-container">
            <img src="images/icons/cart-icon.png" alt="" className="img" />
            <span className="cart-quantity" id="cq">
              {state.addToCart?.length}
            </span>
            <span className="cart-text">Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
