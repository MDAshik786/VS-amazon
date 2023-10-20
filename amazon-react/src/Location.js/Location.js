import React from "react";
import "./Location.css";
import { ACTION } from "../Reducer__/FormReducer";
import { RxCross2 } from "react-icons/rx";
import { getPinCode } from "../API/PinCode";
import { useNavigate } from "react-router";
import { handleNavigate } from "../Function/ComponentFunctions/NavigateFunction";
const Location = ({ state, dispatch }) => {
  const navigate = useNavigate();
  const removeLocation = () => {
    dispatch({
      type: ACTION.REMOVE,
    });
  };
  const handelOnChange = (e) => {
    dispatch({
      type: ACTION.HANDELONCHANGE,
      payload: { value: e.target.value, name: e.target.name },
    });
  };
  return (
    <div className="pincode-main">
      <div className="location-main" onClick={removeLocation} />
      <div className="location-con">
        <RxCross2 className="pincode-cancel-icon" onClick={removeLocation} />
        <p className="location-heading">Choose your location</p>
        <p className="content1">
          Select a delivery location to see product availability and delivery
          options
        </p>
        <button className="location-signIn" onClick={(e) => handleNavigate(navigate, "loginemail", e)}>
          Sign In to see your addresses
        </button>
        <div className="pincode-name">
          <hr className="hr" />
          <span className="pincode-content">or enter an Indian pincode</span>
          <hr className="hr" />
        </div>
        <div className="box-con">
          <input
            className="pincode-input"
            type="number"
            value={state.pincode}
            name="pincode"
            onChange={handelOnChange}
          />
          <button
            className="apply-button"
            onClick={() => getPinCode(state?.pincode, dispatch)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Location;
