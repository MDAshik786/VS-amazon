import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { ACTION } from "../MainContext/Reducer__/FormReducer";
import axios from "axios";
import { userApiUrl } from "../Utils__/apiUrl";
import { useMain } from "../MainContext";
const LoginPassword = () => {
  const mainContext = useMain();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;
  const handelOnChange = (e) => {
    mainContext?.dispatch({
      type: ACTION.HANDELONCHANGE,
      payload: { value: e.target.value, name: e.target.name },
    });
  };
  const passwordVisible = () => {
    mainContext?.dispatch({
      type: ACTION.VISIBLE,
    });
  };
  const loginPasswordVerification = async () => {
    try {
      const response = await axios.post(
        `${userApiUrl}/password`,
        { email, password: mainContext?.state.password },
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
      console.log(response.data, "pass");
      if (response.data === "verified")
        navigate("/", { state: { loginVerification: true, email } });
    } catch (e) {
      console.log(e);
    }
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
          <p className="login-heading">Sign in</p>
          <div>
            <p className="Email-heading">Password:</p>
            <div className="relative">
              {" "}
              <input
                type={mainContext?.state.passwordVisible ? "password" : "Text "}
                className="password-input"
                autoFocus
                name="password"
                placeholder="Enter Your Password"
                value={mainContext?.state.password}
                onChange={handelOnChange}
              />
              {mainContext?.state.passwordVisible ? (
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
            onClick={loginPasswordVerification}
          >
            Sign in
          </button>
          <p className="paragraph">
            <a className="link">Forgot Password</a>
          </p>
        </div>
        {/* <div className="create-user-container">
         <div className="center"> <span className="small-line"></span>
          <span className="new">New to Amazon?</span>
          <span className="small-line"></span></div>
          <button className="create-button">Create your Amazon account</button>
        </div> */}
      </div>
    </div>
  );
};

export default LoginPassword;
