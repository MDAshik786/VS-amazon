// Home.js
import Header from "../HomeHeader";
import React, { useEffect, useState } from "react";
import Products from "../HomeProduct";
import { useLocation } from "react-router";

const Home = ({ state, dispatch }) => {
  const location = useLocation();
  const loginVerification = location?.state?.loginVerification;
  const [loginData, setloginData] = useState({});
  const email = location?.state?.email;
  useEffect(() => {
    if (loginVerification) {
      localStorage.setItem(
        "datas",
        JSON.stringify({ loginVerification, email })
      );
      setloginData(JSON.parse(localStorage.getItem("datas")));
    }
  }, []);
  return (
    <div>
      <Header
        state={state}
        dispatch={dispatch}
        loginData={loginData}
        setloginData={setloginData}
      />
      <Products
        state={state}
        dispatch={dispatch}
        loginData={loginData}
        setloginData={setloginData}
      />
    </div>
  );
};

export default Home;
