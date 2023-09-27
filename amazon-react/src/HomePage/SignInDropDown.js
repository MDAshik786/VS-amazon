import React from "react";
import "./SignInDropDown.css";

const SignInDropDown = () => {
  return (
    <div
      className="nav-container"
    >
      <div className="sign-in-button-con">
        <button className="sign-button">Sign in</button>
      </div>
      <div className="new-customer">
        New customer? <span className="color">start here.</span>
      </div>
      <hr className="hr"/>
      <div className="list-account-container">
        <div className="list-container">
          <div className="nav-contents">
            <p className="list-heading">Your List</p>
            <p className="points">Create a Wish List</p>
            <p className="points">Your Wish List</p>
          </div>
        </div>
        <hr className="hr"/>
        <div className="account-container">
          <div className="nav-contents">
            <p className="account-heading">Your Account</p>
            <p className="points">Your account</p>
            <p className="points">Your Orders</p>
            <p className="points">sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInDropDown;
