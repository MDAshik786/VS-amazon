import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./AddressDelivery.css";
import { Link } from "react-router-dom";
import { handleAddressVisiblity, handleCheckoutCondition } from "../Function/ComponentFunctions/CheckoutFunctions";
import { useMain } from "../MainContext";
const AddressDelivery = () => {
  const mainContext = useMain()
  return (
    <>
      <div className="delivery-headings">
        <h3 className="checkout-heading">1 Select a delivery address</h3>
        <div className="close-container" onClick={() => handleCheckoutCondition(mainContext?.dispatch, "address")}>
          <span className="color-blue">Close</span>
          <RxCross2 className="crossicons" />
        </div>
      </div>
      <div>
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
          <div className="add-new-address-container" onClick={() => handleAddressVisiblity(mainContext?.dispatch)}>
            <img src="images/add.png" alt="add" />
            <Link className="new-addresss">Add a new address</Link>
          </div>
          <div className="locations">
            <img src="images\location-icon.png" alt="" />
            <h3 className="checkout-location-heading">Your pickup locations</h3>
          </div>
        </div>
        <div className="checkouts-button-container">
          <button className="addresss-buttons">Use this address</button>
        </div>
      </div>
    </>
  );
};

export default AddressDelivery;
