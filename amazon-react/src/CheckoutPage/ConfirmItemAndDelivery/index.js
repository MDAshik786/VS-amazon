import React from "react";
import { Link } from "react-router-dom";
import { handleCheckoutCondition } from "../../Function/ComponentFunctions/CheckoutFunctions";
import { useMain } from "../../MainContext";

const ConfirmItemAndDelivery = ({address, paymentProcess}) => {

  const mainContext = useMain();
  return (
    <div className="chosing-options">
      <h3 className="checkout-heading">3 Items and delivery</h3>

      <Link
        className="color-blue"
        onClick={() => handleCheckoutCondition(mainContext?.dispatch, "item", paymentProcess, address)}
      >
        Review Order
      </Link>
    </div>
  );
};

export default ConfirmItemAndDelivery;
