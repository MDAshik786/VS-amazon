import React, { useEffect, useState } from "react";
import "./Cart.css";
import { ACTION } from "../Reducer__/FormReducer";
import ProductCount from "../HomePage/ProductCount";
import axios from "axios";
import { cart } from "../Utils__/apiUrl";
import { useLocation, useNavigate, useParams } from "react-router";
const Cart = ({ state, dispatch }) => {
  // const location = useLocation();
  // const navigate = useNavigate();
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
      });
    } catch (e) {
      console.log(e, "GetAllDataToCart");
    }
  };
  const updateAProduct = async (id, quantity) => {
    try {
      const response = await axios.put(
        `${cart}/update/${parem?.email}`,
        { productId: id, quantity },
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      console.log(e, "addToCart Error");
    }
  };
  const updateQunatityValue = (id, quantity) => {
    dispatch({
      type: ACTION.UPDATEQUANTITY,
      payload: { data: id },
    });
  };
  const saveData = async (id, quantity) => {
    console.log(id);
    const productCount = state.productCount[id]
      ? state.productCount[id]
      : quantity;
    await updateAProduct(id, productCount);
    getAllCartData();
  };
  const DeleteData = (id) => {
    dispatch({
      type: ACTION.DELETEPRODUCT,
      payload: { id },
    });
  };
  return (
    <>
      <div className="heading">Review your order</div>
      <div className="grid-cart-main">
        <div className="left">
          {state?.addToCart.cartItems &&
            state?.addToCart?.cartItems.map((product, index) => {
              return (
                <div className="box" key={product.id}>
                  <div className="date">
                    Delivery date:<span>Tuesday,August10</span>
                  </div>
                  <div className="inside-box-grid">
                    <div className="product-img">
                      <img
                        className="img"
                        src={`http://localhost:3000/${product.product.image}`}
                        alt={product.product.name}
                      />
                    </div>
                    <div className="product-details">
                      <p className="name">{product.product.name}</p>
                      <div className="item-rate">
                        <span className="symbol-icon">₹</span>
                        <p className="price">{product.product.priceIndia}</p>
                      </div>
                      <div>
                        <div className="quantity-container">
                          <span>Quantity: </span>
                          <div>
                            {state.updatedQuantity[product.product.id] ? (
                              <ProductCount
                                state={state}
                                dispatch={dispatch}
                                product={product.product}
                                quantity={product.quantity}
                              />
                            ) : (
                              product.quantity
                            )}
                          </div>
                        </div>
                        <a
                          className="update"
                          onClick={() =>
                            state.updatedQuantity[product.product?.id] === true
                              ? (updateQunatityValue(product.product?.id),
                                saveData(product.product?.id, product.quantity))
                              : updateQunatityValue(product.product?.id)
                          }
                        >
                          {state.updatedQuantity[product.product.id]
                            ? "Save"
                            : "Update"}
                        </a>
                        <a
                          className="Delete"
                          onClick={
                            state.updatedQuantity[product.product.productId]
                              ? () =>
                                  updateQunatityValue(product.product.productId)
                              : () => DeleteData(product.product.productId)
                          }
                        >
                          {" "}
                          {state.updatedQuantity[product.product.productId]
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
