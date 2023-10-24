import React from 'react'

import { useMain } from '../MainContext';
import { ACTION } from '../MainContext/Reducer__/FormReducer';

const CartOrderSummary = () => {
  const mainContext = useMain()
  let shippingCharge = 0;
  mainContext?.state?.addToCart?.cartItems && mainContext?.state?.addToCart?.cartItems?.map((data) => {
      shippingCharge += data?.defaultValue === 1 ? Number(0) : data?.defaultValue === 2 ? Number(50) : Number(100)
    })
  //  mainContext?.dispatch({
  //   type:ACTION.SHIPPINGCHARGES,
  //   payload:{value:shippingCharge}
  //  })
  return (
    <div className="order-details">
          <div className="summary">Order Summary</div>
          <div className="items">
            <p className="item">Items ({mainContext?.state?.addToCart?.cartItems?.length}):</p>
            <p className="rate1"><span className="symbol-icon">₹</span>{mainContext?.state?.addToCart?.totalCost}.00</p>
          </div>
          <div className="items">
            <p className="item">Shipping & handling:</p>
            <p className="deliver-rate"><span className="symbol-icon">₹</span>{shippingCharge}.00</p>
          </div>    
          <div className="items-before-tax">
            <p className="item">Total before tax:</p>
            <div className="before-tax"><span className="symbol-icon">₹</span>{mainContext?.state.addToCart.totalCost + shippingCharge}.00</div>
          </div>
          <div className="items-tax">
            <p className="item">Estimated tax (5%):</p>
            <p className="item-tax-percentage"><span className="symbol-icon">₹</span>{((mainContext?.state.addToCart.totalCost + shippingCharge) * 0.05 ).toFixed(2) || 0}</p>
          </div>
          <div className="order-total">
            <p className="item">Order total:</p>
            <p className="order-rate"><span className="symbol-icon-1">₹</span>{(((mainContext?.state.addToCart.totalCost + shippingCharge) * 0.05) + (mainContext?.state.addToCart.totalCost + shippingCharge)).toFixed(2)  }</p>
          </div>
          <div className="order-container">
            <button className="order-button">Place Your Order</button>
          </div>
          <button className="clear">Clear All From Cart </button>
        </div>
  )
}

export default CartOrderSummary