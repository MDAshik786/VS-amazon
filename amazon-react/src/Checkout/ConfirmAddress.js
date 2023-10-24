import React from "react";
import { Link } from "react-router-dom";
import { handleCheckoutCondition } from "../Function/ComponentFunctions/CheckoutFunctions";
import { useMain } from "../MainContext";

const ConfirmAddress = () => {
  const mainContext = useMain()
  return (
    <div className="chosing-options">
      <h3 className="checkout-heading">1 Delivery address</h3>
      <p className="checkout-address-container">
        Mohamed ashik #165 Amar jothi Layout, domlur BENGALURU, KARNATAKA 560071
      </p>
      <Link className="color-blue" onClick={() => handleCheckoutCondition(mainContext?.dispatch, "address")}>Change</Link>
    </div>
  );
};

export default ConfirmAddress;
