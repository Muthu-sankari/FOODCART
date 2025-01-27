import React from "react";
import {Link}from "react-router-dom";
import "./Header.css";

export const Header = ({cart}) => {
  return (
    <div className="Navbar">
    <div className="logo">FoodCart</div>
    <ul>
        <li>
            <Link to ={"/"}> Home</Link>
        </li>
        <li>
            <Link to ={"/Cart"}>
            <span className="cart-count">{cart.length}&nbsp;&nbsp;<div>Cart</div></span>
            </Link>
        </li>
    </ul>
</div>
  );
};

