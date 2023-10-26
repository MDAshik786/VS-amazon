import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { ACTION } from "../../MainContext/Reducer__";
import { useMain } from "../../MainContext";
import { loginPasswordVerification } from "../../API Function/Login&SignIn";
import Input from "../../CommonUsedComponent/InputComponent";
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
              
               <Input type={mainContext?.state.passwordVisible ? "password" : "Text "} className={"password-input"} autoFocus={"autoFocus"} name={"password"}  placeholder={"Enter Your Password"} value={mainContext?.state?.password} onChange={handelOnChange}/>
              {mainContext?.state?.error?.password && (
                <span className="error-msg">
                  {mainContext?.state?.error?.password}
                </span>
              )}
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
            onClick={() =>
              loginPasswordVerification(
                navigate,
                mainContext?.state,
                email,
                mainContext?.dispatch
              )
            }
          >
            Sign in
          </button>
          <p className="paragraph">
            <a className="link">Forgot Password</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPassword;
