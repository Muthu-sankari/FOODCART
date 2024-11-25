
import React, { useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header}from './Components/Header';
import {ViewCart}from './Components/ViewCart';
import {Home} from './Components/Home';
import { cartContext } from './Components/CartContext';


function App() {
  const[cart,setCart]=useState([]);
  
  return (
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
    <Header cart={cart} />
      <div classname="App">
        <Routes>
          <Route path="/" element={<Home />}/>
        <Route path="/Cart" element={ < ViewCart/>} />
        </Routes>
      
      </div>
    </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
