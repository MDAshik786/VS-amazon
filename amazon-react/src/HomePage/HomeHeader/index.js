import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { MdLocationPin } from "react-icons/md";
import SignInDropDown from "../SignInDropDown";
import { ACTION } from "../../MainContext/Reducer__";
import SignInButtonDropDown from "../SignInButtonDropDown";
import { useMain } from "../../MainContext";
import { handleKeys } from "../../Function/ComponentFunctions/HandleFunction";
import { getAllCartData } from "../../API Function/CartAPI";
import { addAddress, callSignIn } from "../../API Function/HeaderAPI";
import Location from '../../Popup/Address/index.js'
const Header = ({ loginData, setloginData }) => {
  const mainContext = useMain();
  const [isAcive, setIsActive] = useState(false);

  useEffect(() => {
    getAllCartData(mainContext?.dispatch);
    !JSON.parse(localStorage?.getItem("datas"))?.loginVerification &&
      callSignIn(mainContext?.dispatch);
  }, []);

  const handleOnChange = (e) => {
    mainContext?.dispatch({
      type: ACTION.HANDELONCHANGE,
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <>
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
          <div
            className="location-container"
            onClick={() => addAddress(mainContext?.dispatch)}
          >
            <p className="hello">
              {JSON.parse(localStorage.getItem("pincodeDetails"))?.name
                ? "Delivery to"
                : "Hello"}
            </p>
            <div className="inside-location">
              <MdLocationPin className="loaction-icon" />
              <span>
                {JSON.parse(localStorage.getItem("pincodeDetails"))?.name ? (
                  <div>
                    {JSON.parse(localStorage.getItem("pincodeDetails"))?.name}{" "}
                    {
                      JSON.parse(localStorage.getItem("pincodeDetails"))
                        ?.pincode
                    }
                  </div>
                ) : (
                  "Select your address"
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="middle-header">
          <input
            type="text"
            className="search-input"
            name="searchInput"
            placeholder="Search"
            value={mainContext?.state?.searchInput}
            onChange={handleOnChange}
            onKeyDown={(e) =>
              handleKeys(
                e,
                mainContext?.state?.searchInput,
                mainContext?.state?.getApiData,
                mainContext?.dispatch
              )
            }
          />
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
                <p className="account-lists">
                  Account & Lists
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </div>
              {!mainContext?.state.signInVisibility && isAcive && (
                <SignInDropDown
                  loginData={loginData}
                  setloginData={setloginData}
                />
              )}
              {!JSON.parse(localStorage?.getItem("datas"))?.loginVerification &&
                mainContext?.state?.signInVisibility && (
                  <SignInButtonDropDown />
                )}
            </div>
          </Link>
          <Link to={"/"} className="return">
            <div className="all-list-container">
              <p className="return-text">Returns</p>
              <p className="order-text">& Orders</p>
            </div>
          </Link>
          <Link
            to={`/cart/${JSON.parse(localStorage.getItem("datas"))?.email}`}
            className="cart"
          >
            <div className="all-list-container">
              <img src="images/icons/cart-icon.png" alt="" className="img" />
              <span className="cart-quantity" id="cq">
                {mainContext?.state?.addToCart?.cartItems?.length || 0}
              </span>
              <span className="cart-text">Cart</span>
            </div>
          </Link>
        </div>
        {mainContext?.state?.locationVisible && <Location />}
      </div>
      <div className="location"></div>
    </>
  );
};

export default Header;
