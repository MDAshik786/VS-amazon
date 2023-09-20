import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
    <> 
    <div className="heading">Review your order</div>
    <div className="grid-cart-main">
      <div className="left">
        <div className="box">
          <div className="date">Delivery date:<span>Tuesday,August10</span></div>
          <div className="inside-box-grid">
            <div className="product-img">
              <img src="images/products/6-piece-white-dinner-plate-set.jpg" alt="" className="img" />
            </div>
            <div className="product-details">
              <p className="name">Black and Gray Athletic Cotton Socks - 6 Pairs</p>
              <p className="price">$10.90</p>
              <p>
                <span><span>Quantity: </span><span>2</span></span> 
                <a className="update">Update</a>
                <a className="Delete">Delete</a>
              </p>
            </div>
            <div className="delivery-option">
              <div className="name">Choose a delivery option:</div>
              <div className="first-radio">
                <input type="radio" id="option" name="radio"/>
                <div className="deliver-text">
                  <p className="Date">Tuesday, June 21</p>
                  <p className="status">FREE Shipping</p>
                </div>
              </div>
              <div className="first-radio">
                <input type="radio" id="option"
                name="radio"/>
                <div className="deliver-text">
                  <p className="Date">Tuesday, June 21</p>
                  <p className="status">FREE Shipping</p>
                </div>
              </div>
              <div className="first-radio">
                <input type="radio" id="option"
                name="radio"/>
                <div className="deliver-text">
                  <p className="Date">Tuesday, June 21</p>
                  <p className="status">FREE Shipping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    
    <div className="order-details">
        <div className="summary">Order Summary</div>
        <div className="items">
            <p className="item">Items (3):</p>
            <p className="rate1"></p>
        </div>
        <div className="items">
            <p className="item">Shipping & handling:</p>
            <p className="deliver-rate">$0.00</p>
        </div>
        <div className="items-before-tax">
            <p className="item">Total before tax:</p>
            <div className="before-tax"></div>
        </div>
        <div className="items-tax">
            <p className="item">Estimated tax (10%):</p>
            <p className="item-tax-percentage"></p>
        </div>
        <div className="order-total">
            <p className="item">Order total:</p>
            <p className="order-rate"></p>
        </div>
        <div className="order-container">
          <button className="order-button">Place Your Order</button>
        </div>
        <button className="clear">Clear All From Cart </button>
    </div>
   </div>
</>
  )}

export default Cart