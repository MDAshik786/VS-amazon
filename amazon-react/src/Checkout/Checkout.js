import React, { useEffect, useState } from "react";
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
import { getAllAddress } from "../API/AddressAPI";
const Checkout = () => {
  const [address, setAddress] = useState([])
  const mainContext = useMain();
   useEffect(() => {
   const data = getAllAddress(JSON.parse(localStorage.getItem("datas"))?.email)
   data.then(response => {
     setAddress(response)
   })
   },[])
  return (
    <>
      <CheckoutHeader />
      <div className="checkout-main">
        <div className="address-name-container">
          {!mainContext?.state?.checkoutVisiblity?.address ? (
            <ConfirmAddress />
          ) : (
            <AddressDelivery address={address} />
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
