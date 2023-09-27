import React, { useEffect, useState } from "react";
import "./Products.css";
import { ACTION } from "../Reducer__/FormReducer";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router";
import { apiUrl, wishList } from "../Utils__/apiUrl";
import axios from "axios";
import ProductCount from "./ProductCount";
const Products = ({ state, dispatch }) => {
  const location = useLocation();
  const loginVerification = location?.state?.loginVerification;
  const email = location?.state?.email;
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
  let favHeart = [];
  useEffect(() => {
    getData();
    state.productCount = "";
   

    if (localStorage.getItem("addToCart")) {
      dispatch({
        type: ACTION.ADDTOCART,
        payload: { data: JSON.parse(localStorage.getItem("addToCart")) },
      });
    }
    getAllWishListData();
  }, []);

  const moveToCart = (product, quantity) => {
    let productQuantity = 1;
    if (quantity) productQuantity = quantity;

    if (loginVerification) {
      if (localStorage.getItem("addToCart") === null) {
        localStorage.setItem("addToCart", JSON.stringify([]));
        let prevState = JSON.parse(localStorage.getItem("addToCart"));
      }
      let verification = true;
      const addToCartData = JSON.parse(localStorage.getItem("addToCart"));
      addToCartData.map((data) => {
        if (data.productId === product.id) {
          data.userQuantity =
            Number(data.userQuantity) + Number(productQuantity);
          verification = false;
        }
      });
      if (!verification) {
        localStorage.setItem("addToCart", JSON.stringify(addToCartData));
      }

      let object = {
        productId: product.id,
        name: product.name,
        image: product.image,
        priceCents: product.priceCents,
        priceIndia: product.priceIndia,
        ratingstar: product.ratingstar,
        ratingcount: product.ratingcount,
        totalQuantity: product.quantity,
        userQuantity: productQuantity,
        description: product.description,
        size: product.size,
      };
      if (verification) {
        let prevState = JSON.parse(localStorage.getItem("addToCart"));
        localStorage.setItem(
          "addToCart",
          JSON.stringify([...prevState, object])
        );
        let res = JSON.parse(localStorage.getItem("addToCart"));
        dispatch({
          type: ACTION.ADDTOCART,
          payload: { data: res },
        });
      }
    } else {
      navigate("/loginemail");
    }
  };
  try {
    state.wishList && state.wishList.map((data) => {
      favHeart.push(data.id)
    })
    console.log("favHeart",favHeart);
  } catch (error) {
    
  }
  const AddToWishList = async (product) => {
    try {
      const response = await axios.post(
        `${wishList}/add/${email}/${product.id}`,
        {
          id: product.id,
          name: product.name,
          image: product.image,
          priceCents: product.priceCents,
          priceIndia: product.priceIndia,
          totalQuantity: product.totalQuantity,
          ratingStar: product.ratingStar,
          ratingcount: product.ratingCount,
          description: product.description,
          size: product.size,
        },
        {
          headers: {
            "content-Type": "application/json",
          },
        }
      );
    } catch (e) {
      console.log(e, "wishList Error");
    }
  };
  const deleteFromWishList = async (id) => {
    try {
      const response = await axios.delete(`${wishList}/delete/${email}/${id}`);
      console.log(response.data);
    } catch (e) {
      console.log(e, "deleteFromWishList Error");
    }
  };
  const getAllWishListData = async () => {
    try {
      const response = await axios.get(`${wishList}/get/${email}`);
      console.log(response.data, "wishList");
      dispatch({
        type: ACTION.GETALLWISHLIST,
        payload: { data: response.data },
      });
    } catch (e) {
      console.log(e, "getAllDataFromWishList");
    }
  };
  
  const checkWishList = async (key, product) => {
    if (!loginVerification) {
      navigate("/loginemail");
    } else {
      if(favHeart.includes(key)){
        await deleteFromWishList(key);
        await  getAllWishListData()
      }
      else {
        await AddToWishList(product);
        getAllWishListData();
      }

      //  addToFaviroute(key)
    }
  };
  const singlePage = (product) => {
    navigate("/single", { state: { product } });
  };
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
                    src={`images/ratings/rating-${product.ratingStar * 10}.png`}
                    alt={`Rating: ${product.ratingstar}`}
                  />
                  <div className="product-rating-count link-primary">
                    {product.ratingCount}
                  </div>
                </div>
                <div className="product-price">
                  <span className="symbol-icon">₹</span>
                  <span className="price-rate">{product.priceIndia}.00</span>
                </div>
                <ProductCount
                  state={state}
                  dispatch={dispatch}
                  product={product}
                />

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
                  onClick={() =>
                    moveToCart(product, state.productCount[product.id])
                  }
                >
                  Add to Cart
                </button>
                <div
                  className="absolute"
                  onClick={() => checkWishList(product.id, product)}
                >
                  {favHeart.includes(product.id) ? (
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
