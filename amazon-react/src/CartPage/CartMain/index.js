import React, { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router";

import { useMain } from "../../MainContext";
import { getAllCartData } from "../../API Function/CartAPI";
import CartOrderSummary from "../CartOrderSummary";
import CartProducts from "../CartProducts";

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
