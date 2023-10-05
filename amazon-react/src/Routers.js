import React from 'react'
import { Route, Routes } from 'react-router'
import LoginUser from "./Login/LoginUser";
import WhisList from "./WishList/WhisList";
import SingleData from "./SingleData/SingleData";
import NavBarList from "./HomePage/SignInDropDown";
import Cart from "./CartPage/Cart";
import LoginEmail from "./Login/LoginEmail";
import LoginPassword from "./Login/LoginPassword";
import Home from './HomePage/Home';

const Routers = ({state,dispatch,loginData,setLoginData}) => {
  return (
    <Routes>
    <Route path="/" element={<Home state={state} dispatch={dispatch} loginData={loginData} setLoginData={setLoginData} />} />
    <Route
      path="/cart/:email"
      element={<Cart state={state} dispatch={dispatch} />}
    />
    <Route
      path="/loginemail"
      element={<LoginEmail state={state} dispatch={dispatch} />}
    />
    <Route
      path="/loginpassword"
      element={<LoginPassword state={state} dispatch={dispatch} />}
    />
    <Route
      path="/userlogin"
      element={<LoginUser state={state} dispatch={dispatch} />}
    />
    <Route
      path="/list"
      element={<WhisList state={state} dispatch={dispatch} />}
    />
    <Route
      path="/single"
      element={<SingleData state={state} dispatch={dispatch} />}
    />
    <Route path="/navbar" element={<NavBarList />} />
  </Routes>
  )
}

export default Routers