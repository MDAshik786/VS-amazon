import React from "react";
import "./Location.css";
import { ACTION } from "../Reducer__/FormReducer";
const Location = ({ dispatch }) => {
  const removeLocation = () => {
    dispatch({
      type: ACTION.REMOVE,
    });
  };
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="location-main" onClick={removeLocation}>
        <div className="location-con">
          <p className="location-heading">Choose your location</p>
          <p className="content1">
            Select a delivery location to see product availability and delivery
            options
          </p>
          <button className="location-signIn">
            Sign In to see your addresses
          </button>
          <div className="pincode-name">
            <hr className="hr" />
            <span className="pincode-content">or enter an Indian pincode</span>
            <hr className="hr" />
          </div>
          <div className="box-con">
            <input className="pincode-input" />
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
