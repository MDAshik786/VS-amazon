import React from "react";
import { Link } from "react-router-dom";
import { useMain } from "../../MainContext";
import { handleCheckoutCondition } from "../../Function/ComponentFunctions/CheckoutFunctions";

const ConfirmPayment = () => {
  const mainContext = useMain();
  return (
    <div className="chosing-options">
      <h3 className="checkout-heading">2 Payment method</h3>
      <p className="checkout-address-container">Cash On Delivery</p>
      <Link
        className="color-blue"
        onClick={() =>
          handleCheckoutCondition(mainContext?.dispatch, "payment")
        }
      >
        Change
      </Link>
    </div>
  );
};

export default ConfirmPayment;
