import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ACTION } from "../../MainContext/Reducer__";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { userApiUrl } from "../../Utils__/apiUrl";
import { useMain } from "../../MainContext";
import { adduser } from "../../API Function/Login&SignIn";
const UserSingUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  });
  const mainContext = useMain();
  const navigate = useNavigate();
  const passwordVisible = () => {
    mainContext?.dispatch({
      type: ACTION.VISIBLE,
    });
  };
  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
      <Link to={"/"}>
        <div className="amazon-logo-conatiner">
          <img src="images/amazon-logo.png" alt="" width={100} />
          <span className="in">.in</span>
        </div>
      </Link>
      <div className="login-container-outside">
        <div className="login-container">
          <p className="login-heading">Create Account</p>
          <div>
            {" "}
            <p className="input-heading">Your name:</p>
            <input
              type="text"
              className="name-input"
              autoFocus
              name="name"
              placeholder="Enter a Name"
              value={userData.name}
              onChange={handelOnChange}
            />
          </div>
          <div>
            <p className="input-heading">Mobile number:</p>
            <input
              type="number"
              className="email-input"
              placeholder="Enter Your Mobile Number"
              value={userData.phone}
              name="phone"
              onChange={handelOnChange}
            />
          </div>
          <div>
            {" "}
            <p className="Email-heading">Email:</p>
            <input
              type="text"
              className="email-input"
              name="email"
              placeholder="Enter a Email"
              value={userData.email}
              onChange={handelOnChange}
            />
          </div>
          <div>
            <p className="Email-heading">Password:</p>
            <div className="relative">
              {" "}
              <input
                type={
                  !mainContext?.mainContext?.state.passwordVisible
                    ? "password"
                    : "Text "
                }
                className="password-input"
                name="password"
                placeholder="Enter Your Password"
                value={userData.password}
                onChange={handelOnChange}
              />
              <span className="error">
                Passwords must be at least 6 characters.
              </span>
              {!mainContext?.mainContext?.state.passwordVisible ? (
                <FiEyeOff className="eye-icon" onClick={passwordVisible} />
              ) : (
                <FiEye
                  className="eye-icon"
                  name="visible"
                  onClick={passwordVisible}
                />
              )}
            </div>
          </div>
          <button
            className="countinue-button"
            onClick={() => adduser(navigate, userData)}
          >
            Continue
          </button>
          <p className="bottom-line"></p>
          <p className="paragraph">
            Already have an account?
            <a className="link"> Sign in</a>
          </p>
          <p className="paragraph">
            By creating an account or logging in, you agree to Amazon’s{" "}
            <a className="link">Conditions of Use</a> and{" "}
            <a className="link">Privacy Policy.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSingUp;
