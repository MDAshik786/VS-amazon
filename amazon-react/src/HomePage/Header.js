import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <div className="header">
        <div className="left-header">
        <Link to={'/'} className="logo" >
            <img src="Images/amazon-logo-white.png" alt="" className="main-logo"/>
        </Link>
        </div>
        <div className="middle-header">
            <input type="text" className="search-input" placeholder="Search"/>
             <button className="search-bar">
                <img src="Images//icons/search-icon.png" className="img"/>
             </button>
        </div>
        <div className="right-header">
            <Link to={'/'} className="return">
               <span className="return-text">Returns</span> 
               <span className="order-text">& Orders</span>
            </Link>
            <Link to={'/cart'} className="cart">
                <img src="Images/icons/cart-icon.png" alt="" className="img"/>
                <span className="cart-quantity" id="cq"></span>
                <span className="cart-text">Cart</span>
            </Link>
        </div>
    </div>
   
  )
}

export default Header