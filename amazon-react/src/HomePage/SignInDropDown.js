import React, { useEffect, useState } from "react";
import "./SignInDropDown.css";
import { useNavigate } from "react-router";

const SignInDropDown = ({loginData, setloginData}) => {
  const navigate = useNavigate();
  useEffect(() => {
    setloginData(JSON.parse(localStorage.getItem("datas")));
  }, []);
  const removeUser = () => {
    localStorage.setItem("datas", JSON.stringify({}));
    setloginData({});
  };
  const addUser = () => {
    window.location.href = "/loginemail";
    console.log("After");
  };
  const newUser = () => {
    window.location.href = "/userlogin";
  }
  const signInFun = () => {
    loginData.loginVerification && loginData.email
      ? removeUser()
      : navigate("/loginemail");
  };
  return (
    <div className="nav-container">
      <div className="sign-in-button-con">
        <button
          className="sign-button"
          onClick={
            JSON.parse(localStorage?.getItem("datas"))?.loginVerification && JSON.parse(localStorage?.getItem("datas"))?.email
              ? removeUser
              : addUser
          }
        >
          {loginData.loginVerification && loginData.email
            ? "Sign Out"
            : "Sign in"}
        </button>
      </div>
      <div className="new-customer">
        {!(loginData.loginVerification && loginData.email) ? (
          <span>
            New customer? <span className="color" onClick={newUser}>start here.</span>
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
            <p className="points">Your Wish List</p>
          </div>
        </div>
        <hr className="hr-1" />
        <div className="account-container">
          <div className="nav-contents">
            <p className="account-heading">Your Account</p>
            <p className="points">Your account</p>
            <p className="points">Your Orders</p>
            <p className="points" onClick={
            loginData.loginVerification && loginData.email
              ? removeUser
              : addUser
          }
        >
          {loginData.loginVerification && loginData.email
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
