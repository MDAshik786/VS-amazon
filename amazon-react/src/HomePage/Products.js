import React, { useEffect } from "react";
import "./Products.css";
import { ACTION } from "../Reducer__/FormReducer";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import { apiUrl, cart } from "../Utils__/apiUrl";
import axios from "axios";
import ProductCount from "./ProductCount";
import {
  AddToWishList,
  deleteFromWishList,
  getAllWishListData,
} from "../API/WhishListAPI";
import { moveToCart } from "../API/CartAPI";
const Products = ({ state, dispatch, loginData, setloginData }) => {
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
    setloginData(JSON.parse(localStorage.getItem("datas")));
    getAllWishListData(dispatch);
  }, []);

  try {
    state.wishList &&
      state.wishList.map((data) => {
        favHeart.push(data.id);
      });
  } catch (error) {}

  const checkWishList = async (key, product) => {
    if (!loginData?.loginVerification) {
      navigate("/loginemail");
    } else {
      if (favHeart.includes(key)) {
        await deleteFromWishList(key);
        getAllWishListData(dispatch);
      } else {
        await AddToWishList(product);
        getAllWishListData(dispatch);
      }
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

                <div className="add-button-container">
                  {" "}
                  <button
                    className="add-to-cart-button button-primary"
                    onClick={() =>
                      moveToCart(
                        product,
                        state.productCount[product.id],
                        dispatch,
                        navigate
                      )
                    }
                    {...(state.addToCartVisibility[product.id] && {
                      style: {
                        color: "#198754",
                        backgroundColor: "white",
                        border: "none",
                      },
                    })}
                  >
                    {!state.addToCartVisibility[product.id] ? (
                      "Add To Cart"
                    ) : (
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
                    )}
                  </button>
                </div>
                <div
                  className="absolute"
                  onClick={() => checkWishList(product.id, product)}
                >
                  {JSON.parse(localStorage.getItem("datas"))?.loginVerification &&
                  favHeart.includes(product.id) ? (
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
