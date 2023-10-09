import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdLocationPin } from "react-icons/md";
import SignInDropDown from "./SignInDropDown";
import { ACTION } from "../Reducer__/FormReducer";
import { cart } from "../Utils__/apiUrl";
import axios from "axios";
import SignInButtonDropDown from "./SignInButtonDropDown";
import Location from "../Location.js/Location";
import Address from "../Address/Address";
const Header = ({ state, dispatch, loginData, setloginData }) => {
  const [isAcive, setIsActive] = useState(false);
  useEffect(() => {
    getAllCartData();
    !JSON.parse(localStorage?.getItem("datas"))?.loginVerification &&
      callSignIn();
  }, []);

  const callSignIn = () => {
    console.log("first");
    dispatch({
      type: ACTION.SIGNINVISIBILITY,
    });
    setTimeout(() => {
      console.log("second");
      dispatch({
        type: ACTION.REMOVE,
      });
    }, 5000);
  };

  const getAllCartData = async () => {
    try {
      const response = await axios.get(
        `${cart}/get/${JSON.parse(localStorage.getItem("datas"))?.email}`
      );
      console.log(response.data.cartItems.length);
      dispatch({
        type: ACTION.ADDTOCART,
        payload: { data: response.data },
      });
    } catch (e) {
      console.log(e, "GetAllDataToCart");
    }
  };
  const addAddress = () => {
    console.log("Pin");
    dispatch({
      type: ACTION.LOCATIONVISIBLE,
    });
  };

  const disableScroll= (states) =>{
    states?.window.scrollTo(0,0);
  }
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
          <div className="location-container" onClick={addAddress}>
            <p className="hello">{JSON.parse(localStorage.getItem("pincodeDetails"))?.name ? "Delivery to" : "Hello"}</p>
            <div className="inside-location">
              <MdLocationPin className="loaction-icon" />
              <span>
                {JSON.parse(localStorage.getItem("pincodeDetails"))?.name ? (
                  <div>{JSON.parse(localStorage.getItem("pincodeDetails"))?.name } {JSON.parse(localStorage.getItem("pincodeDetails"))?.pincode }</div>
                ) : (
                  "Select your address"
                )}
              </span>
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
                <p className="account-lists">
                  Account & Lists
                  <span className="material-symbols-outlined">
                    arrow_drop_down
                  </span>
                </p>
              </div>
              {!state.signInVisibility && isAcive && (
                <SignInDropDown
                  loginData={loginData}
                  setloginData={setloginData}
                />
              )}
              {!JSON.parse(localStorage?.getItem("datas"))?.loginVerification &&
                state?.signInVisibility && <SignInButtonDropDown />}
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
                {state?.addToCart?.cartItems?.length || 0}
              </span>
              <span className="cart-text">Cart</span>
            </div>
          </Link>
        </div>
        {state?.locationVisible && 
          <Address state={state} dispatch={dispatch} />
        }
      </div>
      <div className="location"></div>
    </>
  );
};

export default Header;
