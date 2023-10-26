import React, { useReducer, useState } from "react";
import "./App.css";

import Routers from "./Router";
import { MainProvider } from "./MainContext/index";

function App() {
  const [loginData, setLoginData] = useState({
    loginVerification: "",
    email: "",
  });
  return (
    <>
      <MainProvider>
        <Routers loginData={loginData} setLoginData={setLoginData} />
      </MainProvider>
    </>
  );
}

export default App;
