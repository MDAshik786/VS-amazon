import React from "react";
import { product } from "../Datas__/Arrays";
import "./Products.css";
const Products = () => {
  const moveToCart = (id) => {};
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
              <div className="product-quantity-container">
                <select
                  className={`quantity-container quantity-container-${product.id}`}
                >
                  <option selected value="1">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className="product-spacer"></div>
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
