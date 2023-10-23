import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./AddressDelivery.css";
const AddressDelivery = () => {
  return (
    <>
      <div className="delivery-headings">
        <h3 className="checkout-heading">1 Select a delivery address</h3>
        <div className="close-container">
          <span>Close</span>
          <RxCross2 className="crossicons" />
        </div>
      </div>
      <div className="delivery-options">
        <h3 className="checkout-heading">Your Addresses</h3>
        <hr className="hr-line" />
        <div className="checkout-option-container">
          <input type="radio" className="radio-types" />
          <div className="checkout-options">
            <div className="">
              <span className="checkout-name">Mohamed ashik </span>#165, Amar
              jothi Layout, domlur, BENGALURU, KARNATAKA, 560071, India
            </div>
            <span className="edit-address">Edit address</span>
          </div>
        </div>
        <div className="locations">
          <img src="images\location-icon.png" alt="" />
          <h3 className="checkout-location-heading">Your pickup locations</h3>
        </div>
      

      </div>
    </>
  );
};

export default AddressDelivery;
