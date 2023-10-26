import React from "react";
import "./index.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { checkWishList } from "../../API Function/WishListAPI";
import { useNavigate } from "react-router";
import ProductCount from "../../HomePage/ProductCount";
import { moveToCart } from "../../API Function/CartAPI";
import { useMain } from "../../MainContext";

const FirstWishList = ({ favHeart }) => {
  const mainContext = useMain();
  const navigate = useNavigate();
  return (
    <>
      <hr className="list-hr" />
      <div className="firstWishList-grid">
        {mainContext?.state.wishList &&
          mainContext?.state.wishList.map((product, index) => {
            return (
              <div className="first-wishList-Box" key={product.id}>
                <div
                  className="first-wishlist-container"
                  onClick={() =>
                    checkWishList(
                      product.id,
                      product,
                      navigate,
                      mainContext?.dispatch,
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
                <div className="first-wishlist-name">
                  <p>{product?.name}</p>
                </div>
                <div className="firts-wishlist-product-price">
                  <span className="symbol-icon">₹</span>
                  <span className="list-price-rate">
                    {product.priceIndia}.00
                  </span>
                </div>
                <div className="product-count-container">
                  Quantity:
                  <ProductCount product={product} />
                </div>
                <div className="first-wishlist-button-container">
                  <button
                    className="first-wishlist-add-to-cart"
                    onClick={() => {
                      moveToCart(
                        product,
                        mainContext?.state.productCount[product.id],
                        mainContext?.dispatch,
                        navigate
                      );
                      checkWishList(
                        product.id,
                        product,
                        navigate,
                        mainContext?.dispatch,
                        favHeart
                      );
                    }}
                    {...(mainContext?.state.addToCartVisibility[product.id] && {
                      style: {
                        color: "#198754",
                        backgroundColor: "white",
                        border: "none",
                      },
                    })}
                  >
                    {!mainContext?.state.addToCartVisibility[product.id] ? (
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
                  <button className="first-wishlist-add-to-cart">
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FirstWishList;
