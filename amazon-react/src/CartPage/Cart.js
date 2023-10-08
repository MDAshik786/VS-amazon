import React, { useEffect, useState } from "react";
import "./Cart.css";
import { ACTION } from "../Reducer__/FormReducer";
import axios from "axios";
import { cart } from "../Utils__/apiUrl";
import { useParams } from "react-router";
import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";
const Cart = ({ state, dispatch }) => {
  const [deliveryOption, setDeliveryOption] = useState({
    
  });
  const parem = useParams();
  useEffect(() => {
    getAllCartData();
  }, []);
  const getAllCartData = async () => {
    try {
      const response = await axios.get(`${cart}/get/${parem.email}`);
      dispatch({
        type: ACTION.ADDTOCART,
        payload: { data: response.data },
      })
    } catch (e) {
      console.log(e, "GetAllDataToCart");
    }
  };

  return (
    <>
      <div className="heading">Shopping Cart</div>
      <div className="grid-cart-main">
        <CartProducts
          state={state} 
          dispatch={dispatch}
          email={parem?.email}
          getAllCartData={getAllCartData}
          deliveryOption={deliveryOption}
          setDeliveryOption={setDeliveryOption}
        />
        <CartOrderSummary state={state} dispatch={dispatch}/>
      </div>
    </>
  );
};

export default Cart;
