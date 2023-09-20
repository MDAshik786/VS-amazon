import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './HomePage/Home';
import './App.css'
import Cart from './CartPage/Cart';
import Login from './Login/Login';

function App() {
  return (<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
  );
}

export default App;
