import React from "react";
import "./SecondWishList.css";
import ProductCount from "../HomePage/ProductCount";
import { moveToCart } from "../API Function/CartAPI";
import { checkWishList } from "../API Function/WishListAPI";
import { useNavigate } from "react-router";
import { AiFillLock } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useMain } from "../MainContext";
const SecondWishList = ({ favHeart }) => {
  const navigate = useNavigate();
  const mainContext = useMain();
  const singlePage = (product) => {
    navigate("/single", { state: { product } });
  };
  return (
    <div>
      {mainContext?.state.wishList &&
        mainContext?.state.wishList.map((product, index) => {
          return (
            <div key={product.id}>
              <div className="list-product-container">
                <div
                  className="list-single-absolute"
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
                <div
                  className="list-img-container"
                  onClick={() => singlePage(product)}
                >
                  <img className="img" src={product.image} alt={product.name} />
                </div>
                <div className="list-details">
                  <p
                    className="list-product-name"
                    onClick={() => singlePage(product)}
                  >
                    {product.name}
                  </p>
                  <div className="list-rating-count">
                    <img
                      className="product-rating-stars"
                      src={`images/ratings/rating-${
                        product.ratingStar * 10
                      }.png`}
                      alt={`Rating: ${product.ratingStar}`}
                    />
                    <p className="single-rating-count">
                      {product.ratingCount} rating
                    </p>{" "}
                  </div>
                  <div className="product-price">
                    <span className="symbol-icon">₹</span>
                    <span className="list-price-rate">
                      {product.priceIndia}.00
                    </span>
                  </div>
                  <p>{product.description}</p>
                </div>
                <div className="quantity-list-container">
                  <p className="stock">In Stock</p>
                  <div className="product-count-container">
                    Quantity:
                    <ProductCount product={product} />
                  </div>
                  <button
                    className="inside-box-button"
                    onClick={() =>
                      moveToCart(
                        product,
                        mainContext?.state.productCount[product.id],
                        mainContext?.dispatch,
                        navigate
                      )
                    }
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
                  <button className="inside-box-button">Buy Now</button>
                  <div className="paragraph-div">
                    <AiFillLock className="lock-icon" />
                    <span className="img-text">Secure Transaction.</span>
                  </div>
                  <button
                    className="outside-box-button"
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
                    {favHeart.includes(product.id)
                      ? "Remove from Wish List"
                      : "Add to Wish List"}
                  </button>
                </div>
              </div>
              <hr className="list-hr" />
            </div>
          );
        })}
    </div>
  );
};

export default SecondWishList;
