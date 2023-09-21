import React, { useReducer } from 'react';
import { Route, Routes } from 'react-router';
import Home from './HomePage/Home';
import './App.css'
import Cart from './CartPage/Cart';
import LoginEmail from './Login/LoginEmail';
import LoginPassword from './Login/LoginPassword';
import { FormReducer, InitialValue } from './Reducer__/FormReducer';
import LoginUser from './Login/LoginUser';


function App() {
  const [state, dispatch] = useReducer(FormReducer, InitialValue);
  return (<Routes>
    <Route path='/' element={<Home state={state} dispatch={dispatch}/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/loginemail' element={<LoginEmail state={state} dispatch={dispatch}/>}/>
    <Route path='/loginpassword' element={<LoginPassword state={state} dispatch={dispatch}/>}/>
    <Route path='/userlogin' element={<LoginUser state={state} dispatch={dispatch}/>}/>
    </Routes>
  );
}

export default App;
