import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./Checkout.css";


import AddressDelivery from "./AddressDelivery";
import ConfirmAddress from "./ConfirmAddress";
const Checkout = () => {
  return (
    <>
      <CheckoutHeader />
      <div className="checkout-main">
        <div className="address-name-container">
        <ConfirmAddress/>
        <AddressDelivery/>
        </div>
      </div>
    </>
  );
};

export default Checkout;
