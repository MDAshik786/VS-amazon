import React, { useState } from "react";
import { product } from "../Datas__/Arrays";
import "./Products.css";
const Products = () => {
  const [quantity, setQuantity] = useState({});
  const moveToCart = (id) => {};
  const handelOnChange = (e) => {
    setQuantity(e.target.value);
  };
  const handelOnClick = (e, key) => {
    const { name } = e.target;
    setQuantity((prevQuantity) => {
      const updatedQuantity = { ...prevQuantity };
    console.log(updatedQuantity,"const")
      if (name === "increase") {
        updatedQuantity[key] = (updatedQuantity[key] || 1) + 1;
      } else {
        updatedQuantity[key] = Math.max((updatedQuantity[key] || 1) - 1, 1);
      }
  
      return updatedQuantity;
    });
  
    console.log(key, quantity, "object");
  };
  
  const handleQuanttiy = (key, e) => {
    let value = (e.target.value);
    setQuantity({ ...quantity, [key]: Number(value) });
    console.log(quantity);
  };
  return (
    <div>
      <div className="grid-main">
        {product.map((product, index) => {
          return (
            <div className="container" key={index}>
              <div className="img-container">
                <img className="img" src={product.image} alt={product.name} />
              </div>
              <div className="product-name">{product.name}</div>
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
                  value={quantity[product.id] == null ? 1: quantity[product.id]}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
