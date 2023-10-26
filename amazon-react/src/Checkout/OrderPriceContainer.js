import React from "react";
import { useMain } from "../MainContext";
import "./OrderPriceContainer.css";
import { handleCheckoutCondition } from "../Function/ComponentFunctions/CheckoutFunctions";

const OrderPriceContainer = () => {
  const mainContext = useMain();
  const cartItems = mainContext?.state?.addToCart?.cartItems || [];
  const totalCost = mainContext?.state?.addToCart?.totalCost || 0;
  const shippingCharge = cartItems.reduce((acc, data) => {
    return acc + (data?.defaultValue === 1 ? 0 : data?.defaultValue === 2 ? 50 : 100);
  }, 0);

  const orderTotal = totalCost + shippingCharge;
  const tax = (orderTotal * 0.05).toFixed(2);

  const handlePlaceOrder = () => {
    const  checkoutVisiblity  = mainContext.state?.checkoutVisiblity;
    const dispatch = mainContext?.dispatch
    const condition = checkoutVisiblity?.address
      ? "address"
      : checkoutVisiblity?.payment
      ? "payment"
      : "item";
    handleCheckoutCondition(dispatch, condition);
  };

  return (
    <div className="checkout-order-details">
      <button className="place-order-button margin" onClick={handlePlaceOrder}>
        {mainContext?.state?.checkoutVisiblity?.address
          ? "Use this Address"
          : mainContext?.state?.checkoutVisiblity?.payment
          ? "Use this Payment"
          : "Place Your Order"}
      </button>

      <hr className="hr-line hr-lines" />
      <div className="summary">Order Summary</div>
      <div className="items">
        <p className="item">Items ({cartItems.length}):</p>
        <p className="rate1">
          <span className="symbol-icon">₹</span>
          {totalCost.toFixed(2)}
        </p>
      </div>
      <div className="items">
        <p className="item">Shipping & Handling:</p>
        <p className="deliver-rate">
          <span className="symbol-icon">₹</span>
          {shippingCharge.toFixed(2)}
        </p>
      </div>
      <div className="items-before-tax">
        <p className="item">Total Before Tax:</p>
        <div className="before-tax">
          <span className="symbol-icon">₹</span>
          {(orderTotal || 0).toFixed(2)}
        </div>
      </div>
      <div className="items-tax">
        <p className="item">Estimated Tax (5%):</p>
        <p className="item-tax-percentage">
          <span className="symbol-icon">₹</span>
          {tax}
        </p>
      </div>
      <div className="checkout-order-total">
        <p className="item">Order Total:</p>
        <p className="order-rate">
          <span className="symbol-icon-1">₹</span>
          {(orderTotal + parseFloat(tax) || 0).toFixed(2)}
        </p>
      </div>
      <button className="order-button" onClick={handlePlaceOrder}>
        Place Your Order
      </button>
    </div>
  );
};

export default OrderPriceContainer;
