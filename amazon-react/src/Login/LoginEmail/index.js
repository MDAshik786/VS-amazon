import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { ACTION } from "../../MainContext/Reducer__";

import { useMain } from "../../MainContext";
import { loginEmailVerification } from "../../API Function/Login&SignIn";
import Input from "../../CommonUsedComponent/InputComponent";

const LoginEmail = () => {
  const navigate = useNavigate();
  const mainContext = useMain();
  const handelOnChange = (e) => {
    mainContext?.dispatch({
      type: ACTION.HANDELONCHANGE,
      payload: { value: e.target.value, name: e.target.name },
    });
  };
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
            <Input type={"text"} className={"email-input"} autoFocus={"autoFocus"} name={"email"}  placeholder={"Please Enter a Email"} value={mainContext?.state.email} onChange={handelOnChange}/>
            <span className="error-msg">
              {mainContext?.state?.error?.email}
            </span>
          </div>
          <button
            className="countinue-button"
            onClick={() =>
              loginEmailVerification(
                navigate,
                mainContext?.state,
                mainContext?.dispatch
              )
            }
          >
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
