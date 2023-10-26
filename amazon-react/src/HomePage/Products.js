import React, { useEffect } from "react";
import "./Products.css";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router";
import ProductCount from "./ProductCount";
import { checkWishList, getAllWishListData } from "../API Function/WishListAPI";
import { moveToCart } from "../API Function/CartAPI";
import { useMain } from "../MainContext";
import { handleChangePage } from "../Function/ComponentFunctions/NavigateFunction";
import { getData } from "../API Function/ProductAPI";
const Products = ({ setloginData }) => {
  const mainContext = useMain();

  const navigate = useNavigate();

  let favHeart = [];
  useEffect(() => {
    getData(mainContext?.dispatch);
    setloginData(JSON.parse(localStorage.getItem("datas")));
    getAllWishListData(mainContext?.dispatch);
  }, []);

  useEffect(() => {
    getData(mainContext?.dispatch);
  }, [mainContext?.state?.searchInput?.length === 0]);
  try {
    mainContext?.state?.wishList &&
      mainContext?.state?.wishList.map((data) => {
        favHeart.push(data.id);
      });
  } catch (error) {}

  const allData = mainContext?.state?.getApiData;

  return (
    <>
      <div className="grid-main">
        {allData &&
          allData?.map((product, index) => {
            return (
              <div className="container" key={index}>
                <div
                  className="img-container"
                  onClick={(e) =>
                    handleChangePage("single", product, navigate, e)
                  }
                >
                  <img className="img" src={product.image} alt={product.name} />
                </div>
                <div
                  className="product-name"
                  onClick={(e) =>
                    handleChangePage("single", product, navigate, e)
                  }
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
                <div className="product-count-container">
                  <span className="quantity-name">Quantity:</span>
                  <ProductCount product={product} />
                </div>

                <div className="add-button-container">
                  {" "}
                  <button
                    className="add-to-cart-button button-primary"
                    onClick={() =>
                      moveToCart(
                        product,
                        mainContext?.state?.productCount[product.id],
                        mainContext?.dispatch,
                        navigate
                      )
                    }
                    {...(mainContext?.state?.addToCartVisibility[
                      product.id
                    ] && {
                      style: {
                        color: "#198754",
                        backgroundColor: "white",
                        border: "none",
                      },
                    })}
                  >
                    {!mainContext?.state?.addToCartVisibility[product.id] ? (
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
                  {JSON.parse(localStorage.getItem("datas"))
                    ?.loginVerification && favHeart.includes(product.id) ? (
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
