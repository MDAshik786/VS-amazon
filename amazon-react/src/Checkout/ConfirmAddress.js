import React from "react";
import { Link } from "react-router-dom";
import { addressContainer, handleCheckoutCondition } from "../Function/ComponentFunctions/CheckoutFunctions";
import { useMain } from "../MainContext";

const ConfirmAddress = ({address}) => {
  const mainContext = useMain()
  const item = address?.defaultAddress
  return (
    <div className="chosing-options">
      <h3 className="checkout-heading">1 Delivery address</h3>
      <div className="checkout-address-container">
      {addressContainer(item)}
      </div>
      <Link className="color-blue" onClick={() => handleCheckoutCondition(mainContext?.dispatch, "address")}>Change</Link>
    </div>
  );
};

export default ConfirmAddress;
