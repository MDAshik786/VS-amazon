import React from "react";
import { ACTION } from "../MainContext/Reducer__";
import { useMain } from "../MainContext";

const ProductCount = ({ product, quantity }) => {
  const mainContext = useMain();
  product.id = product.productId ? product.productId : product.id;
  const handelOnClick = (e, key) => {
    const { name } = e.target;
    mainContext?.dispatch({
      type: ACTION.COUNTNAME,
      payload: { name, key },
    });
  };
  const handleQuanttiy = (key, e) => {
    const value = e.target.value < 1 ? 1: e.target.value
    mainContext?.dispatch({
      type: ACTION.PRODUCTCOUNT,
      payload: { value, key },
    });
  };
  return (
    <div className="number-container">
      <button
        className="symbol"
        name="decrease"
        onClick={(e) => handelOnClick(e, product.id)}
      >
        -
      </button>
      <input
        type="number"
        className="number"
        value={
          mainContext?.state?.productCount[product.id] == null
            ? quantity || 1
            : mainContext?.state?.productCount[product.id]
        }
        onBlur={(e) =>
          e.target.value == "" || e.target.value < 1
            ? (handleQuanttiy(product?.id, e.target.value = 1))
            : null
        }
        onChange={(e) => handleQuanttiy(product.id, e)}
      />
      <button
        className="symbol"
        name="increase"
        onClick={(e) => handelOnClick(e, product.id)}
      >
        +
      </button>
    </div>
  );
};

export default ProductCount;
