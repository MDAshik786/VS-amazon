import React, { useEffect, useState } from "react";
import "./Cart.css";
import { ACTION } from "../MainContext/Reducer__/FormReducer";
import axios from "axios";
import { cart } from "../Utils__/apiUrl";
import { useParams } from "react-router";
import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";
import { useMain } from "../MainContext";
import { getAllCartData } from "../API/CartAPI";
const Cart = () => {
  const mainContext = useMain();
  const [deliveryOption, setDeliveryOption] = useState({});
  const parem = useParams();
  useEffect(() => {
    getAllCartData(mainContext?.dispatch);
  }, []);
  

  return (
    <>
      <div className="heading">Shopping Cart</div>
      <div className="grid-cart-main">
        <CartProducts
          email={parem?.email}
          getAllCartData={getAllCartData}
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
        />
        <CartOrderSummary />
      </div>
    </>
  );
};

export default Cart;
