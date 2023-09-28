// Home.js
import Header from './Header'
import React, { useEffect, useState } from 'react'
import Products from './Products'
import { useLocation } from 'react-router';

const Home = ({ state, dispatch}) => {
  const location = useLocation();
  const loginVerification = location?.state?.loginVerification;

  const email = location?.state?.email;
  useEffect(() => {
    if (loginVerification) {
      localStorage.setItem(
        "datas",
        JSON.stringify({ loginVerification, email })
      );
      
    }
  }, []);
  return (
    <div>
      <Header state={state}  />
      <Products state={state} dispatch={dispatch}   />
    </div>
  );
};

export default Home;
