import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./index.css";
import { Link } from "react-router-dom";
import { useMain } from "../../MainContext";
import {
  addressContainer,
  handelAddressRadio,
  handleAddressVisibility,
  handleCheckoutCondition,
} from "../../Function/ComponentFunctions/CheckoutFunctions";

const AddressDelivery = ({ address, setFunction }) => {
  const mainContext = useMain();

  return (
    <div className="total-delivery-address">
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
        {address?.getAllAddress &&
          address?.getAllAddress?.map((item, index) => (
            <div className="checkout-option-container" key={index}>
              <input
                type="radio"
                className="radio-types"
                name="item"
                checked={address?.defaultAddress?.id === item?.id}
                onChange={() => handelAddressRadio(address, index, setFunction)}
              />
              <div className="checkout-options">
                {addressContainer(item)}
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
        <button
          className="addresss-buttons"
          onClick={() =>
            handleCheckoutCondition(mainContext?.dispatch, "address")
          }
        >
          Use this address
        </button>
      </div>
    </div>
  );
};

export default AddressDelivery;
