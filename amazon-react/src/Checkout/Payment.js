import React from "react";
import "./Payment.css";
import { RxCross2 } from "react-icons/rx";
import { useMain } from "../MainContext";
import { handleCheckoutCondition } from "../Function/ComponentFunctions/CheckoutFunctions";
const Payment = () => {
  const mainContext = useMain();
  return (
    <>
      <div className="payments-container">
        <h3 className="checkout-heading">2 Select a Payment method</h3>
        <div
          className="close-container"
          onClick={() =>
            handleCheckoutCondition(mainContext?.dispatch, "payment")
          }
        >
          <span className="color-blue">Close</span>
          <RxCross2 className="crossicons" />
        </div>
      </div>
      <div>
        <div className="payment-box">
          <div className="credit-debit-card">
            <div className="radio-payment">
              <input type="radio" className="radio-types" />
              <span className="names">Credit or debit card</span>
            </div>
            <img src="images/cards.png" alt="" />
          </div>
          <div className="upis-container">
            <div className="radio-payment">
              <input type="radio" className="radio-types" />
              <span className="names">Other UPI Apps</span>
            </div>
            <p>Please enter your UPI ID</p>
            <div className="input-verify">
              <input type="text" className="upis-input" />
              <button className="payment-buttons">verify</button>
            </div>
          </div>
          <div className="cash-on-delivery-container">
            <input type="radio" className="radio-types" />
            <p className="names">Cash on Delivery/Pay on Delivery</p>
          </div>
        </div>
        <div
          className="checkouts-button-container"
          onClick={() =>
            handleCheckoutCondition(mainContext?.dispatch, "payment")
          }
        >
          <button className="addresss-buttons">Use this payment Mathod</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
