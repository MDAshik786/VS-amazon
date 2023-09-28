import React from "react";
import { ACTION } from "../Reducer__/FormReducer";  

const ProductCount = ({ state, dispatch, product,quantity }) => {
  product.id = product.productId ? product.productId : product.id
  const handelOnClick = (e, key) => {
    const { name } = e.target;
    dispatch({
      type: ACTION.COUNTNAME,
      payload: { name, key },
    });
  };
  const handleQuanttiy = (key, e) => {
    dispatch({
      type: ACTION.PRODUCTCOUNT,
      payload: { value: e.target.value, key },
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
          state.productCount[product.id] == null
            ? quantity || 1
            : state.productCount[product.id]
        }
        onBlur={(e) =>
          e.target.value == "" || e.target.value == 0
            ? (e.target.value = 1)
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
