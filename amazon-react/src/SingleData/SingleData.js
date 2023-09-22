import React from "react";
import { useLocation } from "react-router";
import { GrLocation} from "react-icons/gr";
import { AiFillLock} from "react-icons/ai";

import "./SingleData.css";
const SingleData = () => {
  const location = useLocation();
  const product = location.state.product;
  return (
    <>
      <div className="single-container">
        <div className="simg-container">
          <img className="img" src={product.image} alt={product.name} />
        </div>
        <div className="img-name-container">
          <p className="single-name">{product.name}</p>
          <div className="single-rating">
            <img
              className="product-rating-stars"
              src={`images/ratings/rating-${product.rating.stars * 10}.png`}
              alt={`Rating: ${product.rating.stars}`}
            />
            <p>{product.rating.count}</p>
          </div>
          <p className="bottom-line"></p>
        </div>
        <div className="single-right-div">
          <p className="single-price">${(product.priceCents / 100).toFixed(2)}</p>
          <div><a className="link">FREE delivery</a><span className="single-date"> Sunday, 24 September.</span></div>
          <div>Or fastest delivery<span className="single-date"> Friday, 22 September</span>and <span className="single-date"> wednesday, 20 September.</span></div>
          <div><GrLocation/><a className="link"> Select delivery Location</a></div>
          <p>In Stock</p>
          <div>Quantity:</div>
          <button>Add to Cart</button>
          <button>Buy Now</button>
          <div className="paragraph"> <AiFillLock/><span>Secure Transaction</span></div>
          <button>Add to Wish List</button>
        </div>
      </div>
    </>
  );
};

export default SingleData;
