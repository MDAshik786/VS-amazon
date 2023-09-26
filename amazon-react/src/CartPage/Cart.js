import React, { useEffect, useState } from "react";
import "./Cart.css";
import { ACTION } from "../Reducer__/FormReducer";
import ProductCount from "../HomePage/ProductCount";
const Cart = ({ state, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: ACTION.ADDTOCART,
      payload: { data: JSON.parse(localStorage.getItem("addToCart")) },
    });
  }, []);
  const updateQunatityValue = (id) => {
    dispatch({
      type: ACTION.UPDATEQUANTITY,
      payload: { data: id },
    });
  };
  const saveData = (id) => {
    dispatch({
      type: ACTION.SAVEDATA,
      payload: { id },
    });
  };
  const DeleteData = (id) => {
    dispatch({
      type:ACTION.DELETEPRODUCT,
      payload:{id}
    })
  };
  return (
    <>
      <div className="heading">Review your order</div>
      <div className="grid-cart-main">
        <div className="left">
          {state.addToCart.map((product, index) => {
            return (
              <div className="box" key={index}>
                <div className="date">
                  Delivery date:<span>Tuesday,August10</span>
                </div>
                <div className="inside-box-grid">
                  <div className="product-img">
                    <img src={product.image} alt="" className="img" />
                  </div>
                  <div className="product-details">
                    <p className="name">{product.name}</p>
                    <div className="item-rate"><span className="symbol-icon">₹</span><p className="price">{product.priceIndia}</p></div>
                    <div>
                      <div className="quantity-container">
                        <span>Quantity: </span>
                        <div>
                          {state.updatedQuantity[product.productId] ? (
                            <ProductCount
                              state={state}
                              dispatch={dispatch}
                              product={product}
                            />
                          ) : (
                            product.userQuantity
                          )}
                        </div>
                      </div>
                      <a
                        className="update"
                        onClick={() =>
                          state.updatedQuantity[product.productId] === true
                            ? (updateQunatityValue(product.productId),
                              saveData(product.productId))
                            : updateQunatityValue(product.productId)
                        }
                      >
                        {state.updatedQuantity[product.productId]
                          ? "Save"
                          : "Update"}
                      </a>
                      <a
                        className="Delete"
                        onClick={
                          state.updatedQuantity[product.productId]
                            ? () => updateQunatityValue(product.productId)
                            : () => DeleteData(product.productId)
                        }
                      >
                        {" "}
                        {state.updatedQuantity[product.productId]
                          ? "Cancel"
                          : "Delete"}
                      </a>
                    </div>
                  </div>
                  <div className="delivery-option">
                    <div className="name">Choose a delivery option:</div>
                    <div className="first-radio">
                      <input type="radio" id="option" name="radio" />
                      <div className="deliver-text">
                        <p className="Date">Tuesday, June 21</p>
                        <p className="status">FREE Shipping</p>
                      </div>
                    </div>
                    <div className="first-radio">
                      <input type="radio" id="option" name="radio" />
                      <div className="deliver-text">
                        <p className="Date">Tuesday, June 21</p>
                        <p className="status">FREE Shipping</p>
                      </div>
                    </div>
                    <div className="first-radio">
                      <input type="radio" id="option" name="radio" />
                      <div className="deliver-text">
                        <p className="Date">Tuesday, June 21</p>
                        <p className="status">FREE Shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order-details">
          <div className="summary">Order Summary</div>
          <div className="items">
            <p className="item">Items (3):</p>
            <p className="rate1"></p>
          </div>
          <div className="items">
            <p className="item">Shipping & handling:</p>
            <p className="deliver-rate">$0.00</p>
          </div>
          <div className="items-before-tax">
            <p className="item">Total before tax:</p>
            <div className="before-tax"></div>
          </div>
          <div className="items-tax">
            <p className="item">Estimated tax (10%):</p>
            <p className="item-tax-percentage"></p>
          </div>
          <div className="order-total">
            <p className="item">Order total:</p>
            <p className="order-rate"></p>
          </div>
          <div className="order-container">
            <button className="order-button">Place Your Order</button>
          </div>
          <button className="clear">Clear All From Cart </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
