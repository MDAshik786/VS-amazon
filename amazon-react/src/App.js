import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './HomePage/Home';
import './App.css'
import Cart from './CartPage/Cart';

function App() {
  return (<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
}

export default App;
