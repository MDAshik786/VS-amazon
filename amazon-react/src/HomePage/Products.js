import React, { useEffect } from "react";
import { product } from "../Datas__/Arrays";
import "./Products.css";
import { ACTION } from "../Reducer__/FormReducer";
import { AiOutlineHeart} from "react-icons/ai";
import { AiFillHeart} from "react-icons/ai";
import { useNavigate } from "react-router";
const Products = ({state, dispatch}) => {
const navigate = useNavigate()
  useEffect(() => {
    console.log("aa")
    const savedWishlist = localStorage.getItem("wishlist");
   console.log(savedWishlist,"save  ")
  }, []);
  const moveToCart = (id) => {};

  const handelOnClick = (e, key) => {
    const { name } = e.target;
    dispatch({
      type:ACTION.COUNTNAME,
      payload:{name,key }
    })
  };
  
  const handleQuanttiy = (key, e) => {
    dispatch({
      type:ACTION.PRODUCTCOUNT,
      payload:{value:e.target.value,key}
    })
  };
  const checkWishList = (key) => {
    console.log("first")
    dispatch({
      type:ACTION.WISHLIST,
      payload:{key}
    })
  }
  const singlePage = (product) => {
    navigate("/single",{state:{product}})
  }
  localStorage.setItem("wishlist", JSON.stringify(state.wishList));
  return (
    <>
      <div className="grid-main">
        {product.map((product, index) => {
          return (
            <div className="container" key={index} >
              <div className="img-container" onClick={() => singlePage(product)}>
                <img className="img" src={product.image} alt={product.name} />
              </div>
              <div className="product-name" onClick={() => singlePage(product)}>{product.name}</div>
              <div className="product-rating-container">
                <img
                  className="product-rating-stars"
                  src={`images/ratings/rating-${product.rating.stars * 10}.png`}
                  alt={`Rating: ${product.rating.stars}`}
                />
                <div className="product-rating-count link-primary">
                  {product.rating.count}
                </div>
              </div>
              <div className="product-price">
                ${(product.priceCents / 100).toFixed(2)}
              </div>
              <div className="number-container">
                <button
                  className="symbol"
                  name="decrease"
                  onClick={(e) => handelOnClick(e,product.id)}
                >
                  -
                </button>
                <input
                  type="number"
                  className="number"
                  value={(state.productCount[product.id] == null ) ? 1: state.productCount[product.id] }
                  onBlur={(e) => e.target.value == '' ? (e.target.value = 1) : null}
                  onChange={(e) => handleQuanttiy(product.id, e)}
                />
                <button
                  className="symbol"
                  name="increase"
                  onClick={(e) => handelOnClick(e,product.id)}
                >
                  +
                </button>
              </div>
              <div id={`added-to-cart-${product.id}`} className="added-to-cart">
                <img
                  src="images/icons/checkmark.png"
                  className="img"
                  alt="Added"
                />
                Added
              </div>
              <button
                className="add-to-cart-button button-primary"
                //   data-product-id={product.id}
                onClick={() => moveToCart(product.id)}
              >
                Add to Cart
              </button>
              <div className="absolute" onClick={() => checkWishList(product.id)}>{state.wishList[product.id] ? <AiFillHeart className="wishlist-img-true"/> : <AiOutlineHeart className="wishlist-img"/>}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
