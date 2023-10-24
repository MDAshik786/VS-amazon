import React from "react";
import { useMain } from "../MainContext";
import "./OrderPriceContainer.css";
const OrderPriceContainer = () => {
  const mainContext = useMain();
  let shippingCharge = 0;
  mainContext?.state?.addToCart?.cartItems &&
    mainContext?.state?.addToCart?.cartItems?.map((data) => {
      shippingCharge +=
        data?.defaultValue === 1
          ? Number(0)
          : data?.defaultValue === 2
          ? Number(50)
          : Number(100);
    });
  return (
    <div className="checkout-order-details">
      <button className="place-order-button margin">Place Your Order</button>

      <hr className="hr-line hr-lines" />
      <div className="summary">Order Summary</div>
      <div className="items">
        <p className="item">
          Items ({mainContext?.state?.addToCart?.cartItems?.length || 0}):
        </p>
        <p className="rate1">
          <span className="symbol-icon">₹</span>
          {mainContext?.state?.addToCart?.totalCost || 0} .00
        </p>
      </div>
      <div className="items">
        <p className="item">Shipping & handling:</p>
        <p className="deliver-rate">
          <span className="symbol-icon">₹</span>
          {shippingCharge || 0}.00
        </p>
      </div>
      <div className="items-before-tax">
        <p className="item">Total before tax:</p>
        <div className="before-tax">
          <span className="symbol-icon">₹</span>
          {mainContext?.state.addToCart.totalCost + shippingCharge || 0}.00
        </div>
      </div>
      <div className="items-tax">
        <p className="item">Estimated tax (5%):</p>
        <p className="item-tax-percentage">
          <span className="symbol-icon">₹</span>
          {((mainContext?.state.addToCart.totalCost + shippingCharge) * 0.05 ||
            0).toFixed(2)}
        </p>
      </div>
      <div className="checkout-order-total">
        <p className="item">Order total:</p>
        <p className="order-rate">
          <span className="symbol-icon-1">₹</span>
          {((mainContext?.state.addToCart.totalCost + shippingCharge) * 0.05 +
            (mainContext?.state.addToCart.totalCost + shippingCharge)|| 0 ).toFixed(2)  }
        </p>
      </div>
      <button className="order-button">Place Your Order</button>
    </div>
  );
};

export default OrderPriceContainer;
