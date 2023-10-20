import React from 'react'
import { Route, Routes } from 'react-router'
import LoginUser from "./Login/LoginUser";
import SingleData from "./SingleData/SingleData";
import NavBarList from "./HomePage/SignInDropDown";
import Cart from "./CartPage/Cart";
import LoginEmail from "./Login/LoginEmail";
import LoginPassword from "./Login/LoginPassword";
import Home from './HomePage/Home';
import WishList from './WishList/WishList';
import Layout from './Layout';

const Routers = ({loginData,setLoginData}) => {
  return (
    <Routes>
    <Route path="/" element={<Home  loginData={loginData} setLoginData={setLoginData} />} />
    <Route
      path="/cart/:email"
      element={<Cart />}
    />
    <Route
      path="/loginemail"
      element={<LoginEmail />}
    />
    <Route
      path="/loginpassword"
      element={<LoginPassword />}
    />
    <Route
      path="/userlogin"
      element={<LoginUser />}
    />
    <Route
      path="/list"
      element={<WishList />}
    />
    <Route
      path="/single"
      element={<SingleData />}
    />
    <Route path="/navbar" element={<NavBarList />} />
    <Route path="/layout" element={<Layout/>} />
  </Routes>
  )
}

export default Routers