import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { GrLocation } from "react-icons/gr";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import "./SingleData.css";
import { ACTION } from "../Reducer__/FormReducer";
import Header from "../HomePage/Header";
import ProductCount from "../HomePage/ProductCount";
const SingleData = ({ state, dispatch }) => {
  const location = useLocation();
  const product = location.state.product;
 const changeTheCurrency = () => {
   dispatch({
    type:ACTION.CURRENCY
   })
 }
  const checkWishList = (key) => {
    if (!localStorage.getItem("wishItems")) {
      localStorage.setItem("wishItems", JSON.stringify({}));
    }
    let prevState = JSON.parse(localStorage.getItem("wishItems"));
    localStorage.setItem(
      "wishItems",
      JSON.stringify({
        ...prevState,
        [key]: prevState[key] === undefined ? true : !prevState[key],
      })
    );
    let res = JSON.parse(localStorage.getItem("wishItems"));
    console.log(res);
    dispatch({
      type: ACTION.WISHLIST,
      payload: { data: res },
    });
  };
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    console.log(savedWishlist, "save  ");
    if (localStorage.getItem("wishItems")) {
      dispatch({
        type: ACTION.WISHLIST,
        payload: { data: JSON.parse(localStorage.getItem("wishItems")) },
      });
    }
  }, []);

  return (
    <>
      <Header />
      <div className="single-main-box">
        <div className="single-container">
          <div className="simg-container">
            <img className="img" src={product.image} alt={product.name} />
          </div>
          <div className="img-name-container">
            <p className="single-name">{product.name}</p>
            <div className="single-rating">
              <img
                className="product-rating-stars"
                src={`images/ratings/rating-${product.ratingstar * 10}.png`}
                alt={`Rating: ${product.ratingstar}`}
              />
              <p className="single-rating-count">
                {product.ratingcount} rating
              </p>
            </div>
            <div className="amazon-choice">
              <button className="amazon-choice-button">
                Amazon's <span className="name1">Choice</span>
              </button>
              for<a className="name">"{product.name}"</a>
            </div>
            <p className="bottom-line"></p>
            <div className="amazon-choice">
              <button className="deal-day">Deal Of the Day</button>
            </div>
            <div>
              {" "}
              <div className="single-price">
                {state.currency ? (
                  <>
                    <span className="single-symbol-icon">₹</span>
                    {product.priceIndia}.00
                  </>
                ) : (
                  <p className="single-price">
                    ${(product.priceCents / 100).toFixed(2)}
                  </p>
                )}
              </div>
              <span className="link paragraph" onClick={changeTheCurrency}>
               {state.currency ? "Convert into US dollar." : "Convert to Indian currency."}
              </span>
            </div>
            <div className="Fulfilled">
              <button className="Fulfilled-button">
                <img
                  src="images/amazon-mobile-logo-white.png"
                  alt=""
                  className="img-icon"
                />{" "}
                Fulfilled
              </button>
            </div>
            <div className="description-container">
              <p className="about-heading">About:</p>
              <p className="about-content"> {product.description}</p>
              <p className="about-content">
                {product.size === "Not specified" ? "" : product.size}
              </p>
            </div>
            <p className="bottom-line"></p>
            <div className="image-container">
              <div className="sigle-imgle-container">
                <img
                  src="images/singleProduct/vechicelFree.png"
                  alt=""
                  className="single-img"
                />
                <p className="img-text">Free Delivery</p>
              </div>
              <div className="sigle-imgle-container">
                <img
                  src="images/singleProduct/cashOnDelivery.png"
                  alt=""
                  className="single-img"
                />
                <p className="img-text">Pay on Delivery</p>
              </div>
              <div className="sigle-imgle-container">
                <img
                  src="images/singleProduct/icon-returns._CB484059092_.png"
                  alt=""
                  className="single-img"
                />
                <p className="img-text">10 days Replacement</p>
              </div>
              <div className="sigle-imgle-container">
                <img
                  src="images/singleProduct/icon-warranty._CB485935626_.png"
                  alt=""
                  className="single-img"
                />
                <p className="img-text">2 Year Warranty</p>
              </div>
              <div className="sigle-imgle-container">
                <img
                  src="images/singleProduct/icon-top-brand._CB617044271_.png"
                  alt=""
                  className="single-img"
                />
                <p className="img-text">Top Brand</p>
              </div>
              <div className="sigle-imgle-container">
                <img
                  src="images/singleProduct/vechicle.png"
                  alt=""
                  className="single-img"
                />
                <p className="img-text">Amazon Delivered</p>
              </div>
              <div className="sigle-imgle-container">
                <img
                  src="images/singleProduct/Secure-payment._CB650126890_.png"
                  alt=""
                  className="single-img"
                />
                <p className="img-text">Secure transaction</p>
              </div>
            </div>
            <p className="bottom-line"></p>
            <div
              className="single-absolute"
              onClick={() => checkWishList(product.id)}
            >
              {state.wishList[product.id] ? (
                <AiFillHeart className="single-wishlist-img-true" />
              ) : (
                <AiOutlineHeart className="single-wishlist-img" />
              )}
            </div>
          </div>
          <div className="single-right-div">
            <div className="single-price">
              <span className="single-symbol-icon">₹</span>
              {product.priceIndia}.00
            </div>
            <div className="Fulfilled">
              <button className="Fulfilled-button">
                <img
                  src="images/amazon-mobile-logo-white.png"
                  alt=""
                  className="img-icon"
                />
                Fulfilled
              </button>
            </div>
            <div>
              <a className="link">FREE delivery</a>
              <span className="single-date"> Sunday, 24 September.</span>
            </div>
            <div>
              Or fastest delivery
              <span className="single-date"> Friday, 22 September</span>and{" "}
              <span className="single-date"> wednesday, 20 September.</span>
            </div>
            <div>
              <GrLocation />
              <a className="link"> Select delivery Location</a>
            </div>
            <p className="stock">In Stock</p>
            <div>
              Quantity:{" "}
              <ProductCount
                state={state}
                dispatch={dispatch}
                product={product}
              />
            </div>
            <button className="inside-box-button">Add to Cart</button>
            <button className="inside-box-button">Buy Now</button>
            <div className="paragraph-div">
              {" "}
              <AiFillLock className="lock-icon" />
              <span className="img-text">Secure Transaction.</span>
            </div>
            <button
              className="outside-box-button"
              onClick={() => checkWishList(product.id)}
            >
              {state.wishList[product.id]
                ? "Remove from Wish List"
                : "Add to Wish List"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleData;
