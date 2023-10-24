import React, { useEffect } from "react";
import "./SignInDropDown.css";
import { useNavigate } from "react-router";

import { handleNavigate, moveToCartPage } from "../Function/ComponentFunctions/NavigateFunction";

const SignInDropDown = () => {
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const removeUser = () => {
    localStorage.setItem("datas", JSON.stringify({}));
  };
  return (
    <div className="nav-container">
      <div className="sign-in-button-con">
        <button
          className="sign-button"
          onClick={
            JSON.parse(localStorage?.getItem("datas"))?.loginVerification &&
            JSON.parse(localStorage?.getItem("datas"))?.email
              ? removeUser
              : (e) => handleNavigate(navigate, "loginemail", e)
          }
        >
          {JSON.parse(localStorage.getItem("datas"))?.loginVerification &&
          JSON.parse(localStorage.getItem("datas"))?.email
            ? "Sign Out"
            : "Sign in"}
        </button>
      </div>
      <div className="new-customer">
        {!(
          JSON.parse(localStorage.getItem("datas"))?.loginVerification &&
          JSON.parse(localStorage.getItem("datas"))?.email
        ) ? (
          <span>
            New customer?{" "}
            <span
              className="color"
              onClick={(e) => handleNavigate(navigate, "userlogin", e)}
            >
              start here.
            </span>
          </span>
        ) : (
          ""
        )}
      </div>

      <hr className="hr-1" />
      <div className="list-account-container">
        <div className="list-container">
          <div className="nav-contents">
            <p className="list-heading">Your List</p>
            <p className="points">Create a Wish List</p>
            <p
              className="points"
              onClick={(e) => handleNavigate(navigate,"list", e)}
            >
              Your Wish List
            </p>
            <p className="points" onClick={(e) => moveToCartPage(navigate, e)}>
              Your Cart
            </p>
          </div>
        </div>
        <hr className="hr-1" />
        <div className="account-container">
          <div className="nav-contents">
            <p className="account-heading">Your Account</p>
            <p className="points">Your account</p>
            <p className="points">Your Orders</p>
            <p
              className="points"
              onClick={
                JSON.parse(localStorage.getItem("datas"))?.loginVerification &&
                JSON.parse(localStorage.getItem("datas"))?.email
                  ? removeUser
                  : (e) => handleNavigate(navigate, "loginemail", e)
              }
            >
              {JSON.parse(localStorage.getItem("datas"))?.loginVerification &&
              JSON.parse(localStorage.getItem("datas"))?.email
                ? "Sign Out"
                : "Sign in"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInDropDown;
