import React, { useEffect, useState } from "react";
import "./Item&Delivery.css";
import DateFormate from "../Utils__/DateFormate";
import { addAShippingValue, deleteAProduct, getAllCartData, saveData, updateAProduct } from "../API/CartAPI";
import { useMain } from "../MainContext";
import ProductCount from "../HomePage/ProductCount";
import PlaceYourOrder from "./PlaceYourOrder";
import { handleClickRadio, updateQunatityValue } from "../Function/ComponentFunctions/CartFunction";
const ItemAndDelivery = () => {
    const mainContext = useMain()
  const [deliveryOption, setDeliveryOption] = useState({}); 
  useEffect(() => {
    getAllCartData(mainContext?.dispatch);
  }, []);
 
  return (
    <div className="items-and-delivery-container">
        <h3 className="checkout-heading">3 Review items and delivery</h3>
       {mainContext?.state?.addToCart.cartItems &&
        mainContext?.state?.addToCart?.cartItems.map((product, index) => {
          return (
            <div className="items-containers" key={product.id}>
              <div className="checkout-date">
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
              
              <div className="items-container">
                <div className="checkout-product-img">
                  <img
                    className="img"
                    src={`http://localhost:3000/${product.product.image}`}
                    alt={product.product.name}
                  />
                </div>
                <div className="checkout-product-details">
                  <p className="productName">{product.product.name}</p>
                  <div className="checkout-rating-count">
                    <img
                      className="cart-product-rating-stars"
                      src={`http://localhost:3000/images/ratings/rating-${
                        product.product.ratingStar * 10
                      }.png`}
                      alt={`Rating: ${product.product.ratingStar}`}
                    />
                    <p className="checkout-rating-count">
                      {product.product.ratingCount} rating
                    </p>{" "}
                  </div>
                  <div className="description-container">
                    <p className="cart-about-heading">About:</p>
                    <p className="checkout-about-content">
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
                          ? (updateQunatityValue(product.product?.id, mainContext?.dispatch),
                            saveData(product.product?.id, product.quantity, JSON.parse(localStorage?.getItem("datas"))?.email, mainContext?.state, mainContext?.dispatch))
                          : updateQunatityValue(product.product?.id, mainContext?.dispatch)
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
                          ? () => updateQunatityValue(product.product?.id, mainContext?.dispatch)
                          : () => deleteAProduct(product.id, JSON.parse(localStorage?.getItem("datas"))?.email)
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
                  <div className="checkout-radios">
                    <input
                      type="radio"
                      id={`${product.id}_1`}
                      name={`delivery_option_${product.id}`}
                      checked={product?.defaultValue === 1 ? true : false}
                      onChange={() => handleClickRadio(product.id, 1, mainContext?.dispatch)}
                    />
                    <div className="deliver-text">
                      <div className="Date">{<DateFormate data={6} />}</div>
                      <p className="checkout-status">FREE Shipping</p>
                    </div>
                  </div>
                  <div className="checkout-radios">
                    <input
                      type="radio"
                      id={`${product.id}_2`}
                      name={`delivery_option_${product.id}`}
                      checked={product?.defaultValue === 2 ? true : false}
                      onChange={() => handleClickRadio(product.id, 2, mainContext?.dispatch)}
                    />
                    <div className="deliver-text">
                      <div className="Date">{<DateFormate data={4} />}</div>
                      <p className="checkout-status">Shipping Charges ₹50</p>
                    </div>
                  </div>
                  <div className="checkout-radios">
                    <input
                      type="radio"
                      id={`${product.id}_3`}
                      name={`delivery_option_${product.id}`}
                      checked={product?.defaultValue === 3 ? true : false}
                      onChange={() => handleClickRadio(product.id, 3, mainContext?.dispatch)}
                    />
                    <div className="deliver-text">
                      <div className="Date">{<DateFormate data={2} />}</div>
                      <p className="checkout-status">Shipping Charges ₹100 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <PlaceYourOrder/>
    </div>
  );
};

export default ItemAndDelivery;
