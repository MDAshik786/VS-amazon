import React from "react";
import "./CheckoutHeader.css";
const CheckoutHeader = () => {
  return (
    <div className="checkout-head-main">
      <div className="container">
        <img src="images/amazon-logo.png" alt="" className="checkout-logo" />

        <p className="checkout-heading">Checkout</p>

        <div className="lock-img-container">
          <img src="images/lock.png" alt="" className="lock-img" />
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;