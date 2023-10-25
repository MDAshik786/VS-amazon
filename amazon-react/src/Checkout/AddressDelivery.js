import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./AddressDelivery.css";
import { Link } from "react-router-dom";
import { useMain } from "../MainContext";
import {
  handleAddressVisibility,
  handleCheckoutCondition,
} from "../Function/ComponentFunctions/CheckoutFunctions";

const AddressDelivery = ({ address }) => {
  const mainContext = useMain();

  return (
    <div>
      <div className="delivery-headings">
        <h3 className="checkout-heading">1 Select a delivery address</h3>
        <div
          className="close-container"
          onClick={() =>
            handleCheckoutCondition(mainContext?.dispatch, "address")
          }
        >
          <span className="color-blue">Close</span>
          <RxCross2 className="crossicons" />
        </div>
      </div>
      <div className="delivery-options">
        <h3 className="checkout-heading">Your Addresses</h3>
        <hr className="hr-line" />
        {address &&
          address.map((item, index) => (
            <div className="checkout-option-container" key={index}>
              <input type="radio" className="radio-types" />
              <div className="checkout-options">
                <div className="user-address-containers">
                  {item.name && (
                    <span className="checkout-name">{item.name},</span>
                  )}
                  {item.flat && (
                    <span className="user-address-details">#{item.flat},</span>
                  )}
                  {item.area && (
                    <span className="user-address-details">{item.area},</span>
                  )}
                  {item.landmark && (
                    <span className="user-address-details">
                      {item.landmark},
                    </span>
                  )}
                  {item.city && (
                    <span className="user-address-details">{item.city},</span>
                  )}
                  {item.state && (
                    <span className="user-address-details">{item.state},</span>
                  )}
                  {item.pincode && (
                    <span className="user-address-details">
                      {item.pincode},
                    </span>
                  )}
                  <span className="user-address-details">{item.country}</span>
                </div>
                <span className="edit-address">Edit address</span>
              </div>
            </div>
          ))}
        <div
          className="add-new-address-container"
          onClick={() => handleAddressVisibility(mainContext?.dispatch)}
        >
          <img src="images/add.png" alt="add" />
          <Link className="new-addresss">Add a new address</Link>
        </div>
        <div className="locations">
          <img src="images/location-icon.png" alt="" />
          <h3 className="checkout-location-heading">Your pickup locations</h3>
        </div>
      </div>
      <div className="checkouts-button-container">
        <button className="addresss-buttons">Use this address</button>
      </div>
    </div>
  );
};

export default AddressDelivery;
