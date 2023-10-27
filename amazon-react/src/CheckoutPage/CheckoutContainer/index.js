import React, { useEffect, useState } from "react";
import CheckoutHeader from "../CheckoutHeader";
import "./index.css";

import AddressDelivery from "../AddressDelivery";
import ConfirmAddress from "../ConfirmAddress";
import Payment from "../Payment";
import ConfirmPayment from "../ConfirmPayment";
import ItemAndDelivery from "../Item&Delivery";
import OrderPriceContainer from "../OrderPriceContainer";
import ConfirmItemAndDelivery from "../ConfirmItemAndDelivery";
import { useMain } from "../../MainContext";
import { getAllAddress } from "../../API Function/AddressAPI";
import Address from "../../Popup/Address";
const Checkout = () => {
  const [address, setAddress] = useState({
    getAllAddress: [],
    defaultAddress: {},
  });
  const [paymentProcess, setpaymentProcess] = useState('')

  const mainContext = useMain();
  useEffect(() => {
    const data = getAllAddress(
      JSON.parse(localStorage.getItem("datas"))?.email
    );
    data.then((response) => {
      setAddress((data) => ({
        ...data,
        getAllAddress: response,
      }));
    });
  }, []);
  useEffect(() => {
    address?.getAllAddress &&
      address?.getAllAddress?.map((item, index) => {
        if (item?.defaultValue) {
          setAddress((data) => ({
            ...data,
            defaultAddress: item,
          }));
        }
      });
  }, [address?.getAllAddress]);

  const setFunction = (name, value) => {
    setAddress((address) => ({
      ...address,
      [name]: value,
    }));
  };
  const handleRadioPayment = (value) => {
    setpaymentProcess(value)
  
  }
  return (
    <>
      <CheckoutHeader />
      <div className="checkout-main">
        <div className="address-name-container">
          {!mainContext?.state?.checkoutVisiblity?.address ? (
            <ConfirmAddress address={address} />
          ) : (
            <AddressDelivery address={address} setFunction={setFunction} />
          )}
          <hr className="hr-line" />
          {!mainContext?.state?.checkoutVisiblity?.payment ? (
            <ConfirmPayment paymentProcess={paymentProcess} />
          ) : (
            <Payment paymentProcess={paymentProcess} handleRadioPayment={handleRadioPayment} />
          )}
          <hr className="hr-line" />
          {!mainContext?.state?.checkoutVisiblity?.item ? (
            <ConfirmItemAndDelivery address={address} paymentProcess={paymentProcess} />
          ) : (
            <ItemAndDelivery />
          )}
        </div>

        <OrderPriceContainer address={address} paymentProcess={paymentProcess} />
      </div>
      {mainContext?.state?.addressVisible && <Address />}
    </>
  );
};

export default Checkout;
