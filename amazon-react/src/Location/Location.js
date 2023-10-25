import React from "react";
import "./Location.css";
import { RxCross2 } from "react-icons/rx";
import { getPinCode } from "../API/PinCode";
import { useNavigate } from "react-router";
import { handleNavigate } from "../Function/ComponentFunctions/NavigateFunction";
import { ACTION } from "../MainContext/Reducer__/FormReducer";
import { useMain } from "../MainContext";
import { clearAllPinCodeData, removeLocation } from "../Function/ComponentFunctions/PinCodeFunction";
const Location = () => {
  const mainContext = useMain();
  const navigate = useNavigate();

  const handelOnChange = (e) => {
    mainContext?.dispatch({
      type: ACTION.HANDELONCHANGE,
      payload: { value: e.target.value, name: e.target.name },
    });
    
  };
  return (
    <div className="pincode-main">
      <div
        className="location-main"
        onClick={() => removeLocation(mainContext?.dispatch)}
      />
      <div className="location-con">
        <RxCross2
          className="pincode-cancel-icon"
          onClick={() => removeLocation(mainContext?.dispatch)}
        />
        <p className="location-heading">Choose your location</p>
        <p className="content1">
          Select a delivery location to see product availability and delivery
          options
        </p>
        <button
          className="location-signIn"
          onClick={(e) => handleNavigate(navigate, "loginemail", e)}
        >
          Sign In to see your addresses
        </button>
        <div className="pincode-name">
          <hr className="hr" />
          <span className="pincode-content">or enter an Indian pincode</span>
          <hr className="hr" />
        </div>
        <div className="box-con">
         <div className="pincode-container">
         <input
            className="pincode-input"
            type="number"
            value={mainContext?.state?.pincode}
            name="pincode"
            onChange={handelOnChange}
          />
          <p className="error-msg">{mainContext?.state?.error?.pincode}</p>
         </div>
          <button
            className="apply-button"
            onClick={() =>
              getPinCode(mainContext?.state?.pincode, mainContext?.dispatch)
            }
          >
            {mainContext?.state?.buttonLoading ? (
              <img src="images/Spin-0.8s-297px.gif" alt="" />
            ) : (
              "Apply"
            )}
          </button>
          
        </div>
      
      </div>
    </div>
  );
};

export default Location;
