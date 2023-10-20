import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ACTION } from "../MainContext/Reducer__/FormReducer";
import axios from "axios";
import { userApiUrl } from "../Utils__/apiUrl";
import { useMain } from "../MainContext";

const LoginEmail = () => {
  const navigate = useNavigate();
  const mainContext = useMain();
  const handelOnChange = (e) => {
    mainContext?.dispatch({
      type: ACTION.HANDELONCHANGE,
      payload: { value: e.target.value, name: e.target.name },
    });
  };
  const loginEmailVerification = async () => {
    try {
      const response = await axios.post(
        `${userApiUrl}/email`,
        { email: mainContext?.state.email },
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.data === "verified")
        navigate("/loginpassword", {
          state: { loginEmail: true, email: mainContext?.state.email },
        });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(mainContext?.state, "mainContext?.state");
  return (
    <>
      <Link to={"/"}>
        <div className="amazon-logo-conatiner">
          <img src="images/amazon-logo.png" alt="" width={100} />
          <span className="in">.in</span>
        </div>
      </Link>
      <div className="login-container-outside">
        <div className="login-container">
          <p className="login-heading">Sign in</p>
          <div>
            <p className="Email-heading">Email:</p>
            <input
              type="text"
              className="email-input"
              autoFocus
              name="email"
              placeholder="Please Enter a Email"
              value={mainContext?.state.email}
              onChange={handelOnChange}
            />
          </div>
          <button className="countinue-button" onClick={loginEmailVerification}>
            Continue
          </button>
          <p className="paragraph">
            By countinuing, you agree to Amazon's{" "}
            <a className="link">Condition to Use</a> and{" "}
            <a className="link">Private Notice.</a>
          </p>
          <p className="paragraph">
            <a className="link">Forgot Password</a>
          </p>
          <div>
            <p className="bottom-line"></p>
            <p className="paragraph work">Buying for work?</p>
            <p className="paragraph">
              <a className="link">Shop on Amazon Business</a>
            </p>
          </div>
        </div>
        <div className="create-user-container">
          <div className="center">
            {" "}
            <span className="small-line"></span>
            <span className="new">New to Amazon?</span>
            <span className="small-line"></span>
          </div>
          <button className="create-button">Create your Amazon account</button>
        </div>
      </div>
    </>
  );
};

export default LoginEmail;
