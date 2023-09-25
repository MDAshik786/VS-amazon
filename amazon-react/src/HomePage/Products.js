import React, { useEffect, useState } from "react";
import "./Products.css";
import { ACTION } from "../Reducer__/FormReducer";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router";
import { apiUrl } from "../Utils__/apiUrl";
import axios from "axios";
import ProductCount from "./ProductCount";
const Products = ({ state, dispatch }) => {
  const location = useLocation()
  const loginVerification = location?.state?.loginVerification;
  const getData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/get`);
      dispatch({
        type: ACTION.GETDATA,
        payload: { data: response.data },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    getData();
    state.productCount =''
    if (localStorage.getItem("wishItems")) {
      dispatch({
        type: ACTION.WISHLIST,
        payload: { data: JSON.parse(localStorage.getItem("wishItems")) },
      });
    }

    if(localStorage.getItem("addToCart")){
      dispatch({
        type:ACTION.ADDTOCART,
        payload:{data:JSON.parse(localStorage.getItem("addToCart"))}
      })
    }
  }, []);
  const moveToCart = (product,quantity) => {
      let productQuantity = 1
      if(quantity)
      productQuantity = quantity

    if(loginVerification){
      if (localStorage.getItem("addToCart") === null) {
        localStorage.setItem("addToCart", JSON.stringify([]));
        let prevState = JSON.parse(localStorage.getItem("addToCart"));
        console.log("prevState 1",prevState);
      }
     const identifyId = JSON.parse(localStorage.getItem("addToCart")).filter((data) => 
              data.productId === product.id
     )
      let object = {
        productId:product.id,
        name:product.name,
        image:product.image,
        priceCents:product.priceCents,
        priceIndia:product.priceIndia,
        ratingstar:product.ratingstar,
        ratingcount:product.ratingcount,
        totalQuantity:product.quantity,
        userQuantity:productQuantity,
        description:product.description,
        size:product.size,
      }
      let prevState = JSON.parse(localStorage.getItem("addToCart"));
      console.log("prevState 2",prevState);
      localStorage.setItem("addToCart",JSON.stringify([...prevState,object]))
      let res = JSON.parse(localStorage.getItem("addToCart"));
      console.log(res,"resss")
      dispatch({
        type:ACTION.ADDTOCART,
        payload:{data:res}
      })
    }
    else{
      navigate("/loginemail")
    }
  };
  const checkWishList = (key) => {
    if(loginVerification){
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
    dispatch({
      type: ACTION.WISHLIST,
      payload: { data: res },
    });
  }
  else
  navigate("/loginemail")
  };
  const singlePage = (product) => {
    navigate("/single", { state: { product } });
  };
  if (!state.getApiData) return "loding";
  return (
    <>
      <div className="grid-main">
        {state.getApiData &&
          state.getApiData.map((product, index) => {
            return (
              <div className="container" key={index}>
                <div
                  className="img-container"
                  onClick={() => singlePage(product)}
                >
                  <img className="img" src={product.image} alt={product.name} />
                </div>
                <div
                  className="product-name"
                  onClick={() => singlePage(product)}
                >
                  {product.name}
                </div>
                <div className="product-rating-container">
                  <img
                    className="product-rating-stars"
                    src={`images/ratings/rating-${product.ratingstar * 10}.png`}
                    alt={`Rating: ${product.ratingstar}`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.ratingcount}
                  </div>
                </div>
                <div className="product-price">
                  <span className="symbol-icon">₹</span>
                  <span className="price-rate">{product.priceIndia}.00</span>
                </div>
                <ProductCount state={state} dispatch={dispatch} product={product}/>
                
                <div
                  id={`added-to-cart-${product.id}`}
                  className="added-to-cart"
                >
                  <img
                    src="images/icons/checkmark.png"
                    className="img"
                    alt="Added"
                  />
                  Added
                </div>
                <button
                  className="add-to-cart-button button-primary"
                  onClick={() => moveToCart(product,state.productCount[product.id])}
                >
                  Add to Cart
                </button>
                <div
                  className="absolute"
                  onClick={() => checkWishList(product.id)}
                >
                  {state.wishList[product.id] ? (
                    <AiFillHeart className="wishlist-img-true" />
                  ) : (
                    <AiOutlineHeart className="wishlist-img" />
                  )}
                </div>    
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
