import React, { useEffect } from 'react'
import "./ViewCart.css"
import { useState } from 'react'
import { useContext } from 'react';
import { cartContext } from "./CartContext";

 export const ViewCart = () => {
  const {cart}=useContext(cartContext);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amount),0))
  },[cart])
  return (
    <>
    <h1 className='cart-head'>Cart Products</h1>
    <div className="cart-container">
      {
        cart.map((product)=>(
<div className="cart-product" key={product.id}>
<div className='img'>
      <img src={product.pic} alt="image"/>
      </div>
      <div className="cart-product-details">
      <h3>{product.name}</h3>
      <p>Price Rs:{product.amount}</p></div></div>
     
        )) }
      </div>
      <h2 className="cart-amount">Total Price is :{total}</h2>
      </>
  )
  
}
