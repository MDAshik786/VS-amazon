import React from "react";
import "./FirstWishList.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { checkWishList } from "../API/WhishListAPI";
import { useNavigate } from "react-router";
import ProductCount from "../HomePage/ProductCount";
import { moveToCart } from "../API/CartAPI";

const FirstWishList = ({state, dispatch, favHeart}) => {
  const navigate = useNavigate()
  return (
    <>
      <hr className="list-hr"/>
      <div className="firstWishList-grid">
      {state.wishList &&
        state.wishList.map((product, index) => {
          return (
            
              <div className="first-wishList-Box" key={product.id}>
                   <div
              className="first-wishlist-container"
              onClick={() =>
                checkWishList(
                  product.id,
                  product,
                  navigate,
                  dispatch,
                  favHeart
                )
              } 
            >
              {favHeart.includes(product.id) ? (
                <AiFillHeart className="single-wishlist-img-true" />
              ) : (
                <AiOutlineHeart className="single-wishlist-img" />
              )}
            </div>
            
                 <div className="first-wishlist-img-container">
                 <img className="img" src={product.image} alt={product.name} />
                 </div>
                 <div className="first-wishlist-name"><p>{product?.name}</p></div>
                 <div className="firts-wishlist-product-price">
                 
                    <span className="symbol-icon">₹</span>
                    <span className="list-price-rate">
                      {product.priceIndia}.00
                    </span>
                  </div>
                  <div className="product-count-container">
                    Quantity:
                    <ProductCount 
                      state={state}
                      dispatch={dispatch}
                      product={product}
                    />
                  </div>
                  <div className="first-wishlist-button-container"><button className="first-wishlist-add-to-cart"  onClick={() =>{
                      moveToCart(
                        product,
                        state.productCount[product.id],
                        dispatch,
                        navigate
                      )
                      checkWishList(product.id,product,navigate,dispatch,favHeart)
                      }
                    }
                    {...(state.addToCartVisibility[product.id] && {
                      style: {
                        color: "#198754",
                        backgroundColor: "white",
                        border: "none",
                      },
                    })}> {!state.addToCartVisibility[product.id] ? (
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
                    )}</button>
                  <button className="first-wishlist-add-to-cart">Buy Now</button></div>
                </div>
          )})
}
      </div>
    </>
  );
};

export default FirstWishList;
