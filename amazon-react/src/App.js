import React, { useReducer,useState } from "react";
import "./App.css";
import { FormReducer, InitialValue } from "./Reducer__/FormReducer";
import Routers from "./Routers";

function App() {
const [state, dispatch] = useReducer(FormReducer, InitialValue);
  const [loginData, setLoginData] = useState({
    loginVerification:'',
    email:''
  })
  return (
   <>
  <Routers state={state} dispatch={dispatch} loginData={loginData} setLoginData ={setLoginData}/>
   </>
  )
}

export default App;
