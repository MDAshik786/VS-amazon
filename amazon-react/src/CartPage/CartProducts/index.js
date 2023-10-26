import React from "react";
import ProductCount from "../../HomePage/ProductCount";
import DateFormate from "../../Utils__/DateFormate";
import axios from "axios";
import { cart } from "../../Utils__/apiUrl";
import { ACTION } from "../../MainContext/Reducer__/FormReducer";
import {
  addAShippingValue,
  deleteAProduct,
  saveData,
} from "../../API Function/CartAPI";
import { useNavigate } from "react-router";
import { useMain } from "../../MainContext";
import { handleNavigate } from "../../Function/ComponentFunctions/NavigateFunction";
import {
  handleClickRadio,
  updateQunatityValue,
} from "../../Function/ComponentFunctions/CartFunction";
const CartProducts = ({
  email,
  deliveryOption,
  getAllCartData,
  setDeliveryOption,
}) => {
  const mainContext = useMain();
  const navigate = useNavigate();
  return (
    <div className="left">
      {mainContext?.state?.addToCart.cartItems &&
        mainContext?.state?.addToCart?.cartItems.length === 0 && (
          <div className="length-zero-container">
            <p className="cart-empty-heading">Your Amazon Cart is empty.</p>
            <button
              className="view-all-product-button"
              onClick={() => handleNavigate(navigate, "")}
            >
              View All Product
            </button>
          </div>
        )}
      {mainContext?.state?.addToCart.cartItems &&
        mainContext?.state?.addToCart?.cartItems.map((product, index) => {
          return (
            <div className="box" key={product.id}>
              <div className="date">
                Delivery date:
                <span className="delivery-date">
                  {deliveryOption[product.id] === 1 ? (
                    <DateFormate data={6} />
                  ) : deliveryOption[product.id] === 2 ? (
                    <DateFormate data={4} />
                  ) : (
                    <DateFormate data={2} />
                  )}
                </span>
              </div>
              <hr className="list-hr" />
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
                  <div className="cart-rating-count">
                    <img
                      className="cart-product-rating-stars"
                      src={`http://localhost:3000/images/ratings/rating-${
                        product.product.ratingStar * 10
                      }.png`}
                      alt={`Rating: ${product.product.ratingStar}`}
                    />
                    <p className="single-rating-count">
                      {product.product.ratingCount} rating
                    </p>{" "}
                  </div>
                  <div className="description-container">
                    <p className="cart-about-heading">About:</p>
                    <p className="cart-about-content">
                      {" "}
                      {product.product.description}
                    </p>
                    <p className="about-content">
                      {product.product.size === "Not specified"
                        ? ""
                        : product.size}
                    </p>
                  </div>
                  <div className="item-rate">
                    <span className="symbol-icon">₹</span>
                    <p className="price">{product.product.priceIndia}</p>
                  </div>
                  <div>
                    <div className="quantity-container">
                      <span>Quantity: </span>
                      <div>
                        {mainContext?.state.updatedQuantity[
                          product.product.id
                        ] ? (
                          <ProductCount
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
                        mainContext?.state.updatedQuantity[
                          product.product?.id
                        ] === true
                          ? (updateQunatityValue(
                              product.product?.id,
                              mainContext?.dispatch
                            ),
                            saveData(
                              product.product?.id,
                              product.quantity,
                              JSON.parse(localStorage.getItem("datas"))?.email,
                              mainContext?.state,
                              mainContext?.dispatch
                            ))
                          : updateQunatityValue(
                              product.product?.id,
                              mainContext?.dispatch
                            )
                      }
                    >
                      {mainContext?.state.updatedQuantity[product.product.id]
                        ? "Save"
                        : "Update"}
                    </a>
                    <a
                      className="Delete"
                      onClick={
                        mainContext?.state.updatedQuantity[product.product.id]
                          ? () =>
                              updateQunatityValue(
                                product.product.id,
                                mainContext?.dispatch
                              )
                          : () =>
                              deleteAProduct(
                                product.id,
                                JSON.parse(localStorage.getItem("datas"))?.email
                              )
                      }
                    >
                      {mainContext?.state.updatedQuantity[product.product.id]
                        ? "Cancel"
                        : "Delete"}
                    </a>
                  </div>
                </div>
                <div className="delivery-option">
                  <div className="name">Choose a delivery option:</div>
                  <div className="first-radio">
                    <input
                      type="radio"
                      id={`${product.id}_1`}
                      name={`delivery_option_${product.id}`}
                      checked={product?.defaultValue === 1 ? true : false}
                      onChange={() =>
                        handleClickRadio(product.id, 1, mainContext?.dispatch)
                      }
                    />
                    <div className="deliver-text">
                      <div className="Date">{<DateFormate data={6} />}</div>
                      <p className="status">FREE Shipping</p>
                    </div>
                  </div>
                  <div className="first-radio">
                    <input
                      type="radio"
                      id={`${product.id}_2`}
                      name={`delivery_option_${product.id}`}
                      checked={product?.defaultValue === 2 ? true : false}
                      onChange={() =>
                        handleClickRadio(product.id, 2, mainContext?.dispatch)
                      }
                    />
                    <div className="deliver-text">
                      <div className="Date">{<DateFormate data={4} />}</div>
                      <p className="status">Shipping Charges ₹50</p>
                    </div>
                  </div>
                  <div className="first-radio">
                    <input
                      type="radio"
                      id={`${product.id}_3`}
                      name={`delivery_option_${product.id}`}
                      checked={product?.defaultValue === 3 ? true : false}
                      onChange={() =>
                        handleClickRadio(product.id, 3, mainContext?.dispatch)
                      }
                    />
                    <div className="deliver-text">
                      <div className="Date">{<DateFormate data={2} />}</div>
                      <p className="status">Shipping Charges ₹100 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CartProducts;
