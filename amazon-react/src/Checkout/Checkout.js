import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./Checkout.css";

import AddressDelivery from "./AddressDelivery";
import ConfirmAddress from "./ConfirmAddress";
import Payment from "./Payment";
import ConfirmPayment from "./ConfirmPayment";
import ItemAndDelivery from "./Item&Delivery";
import OrderPriceContainer from "./OrderPriceContainer";
import ConfirmItemAndDelivery from "./ConfirmItemAndDelivery";
import { useMain } from "../MainContext";
import Address from "../Address/Address";
const Checkout = () => {
  const mainContext = useMain();

  return (
    <>
      <CheckoutHeader />
      <div className="checkout-main">
        <div className="address-name-container">
          {!mainContext?.state?.checkoutVisiblity?.address ? (
            <ConfirmAddress />
          ) : (
            <AddressDelivery />
          )}
          <hr className="hr-line" />
          {!mainContext?.state?.checkoutVisiblity?.payment ? (
            <ConfirmPayment />
          ) : (
            <Payment />
          )}
          <hr className="hr-line" />
          {!mainContext?.state?.checkoutVisiblity?.item ? (
            <ConfirmItemAndDelivery />
          ) : (
            <ItemAndDelivery />
          )}
        </div>

        <OrderPriceContainer />
      </div>
      {mainContext?.state?.addressVisible && <Address />}
    </>
  );
};

export default Checkout;
