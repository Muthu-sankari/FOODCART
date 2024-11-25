import React from 'react'
import "./Product.css";
import { useContext } from 'react';
import { cartContext } from './CartContext';

export const Product = ({product}) => {
  const {cart,setCart}=useContext(cartContext);
  const addCart=()=>{
    setCart([...cart,product])
  };
  const removeCart=()=>{
    setCart(cart.filter((c)=>c.id !==product.id));
    
  };
  return (
  <div className="product">
    <div className="img">
    <img src={product.pic} alt={product.name}/>
    </div>
<div className="details">
<h3>{product.name}</h3>
<p>Price Rs:{product.amount}</p>
{cart.includes(product)?(
  <button className="remove" onClick={removeCart}>Remove from Cart</button>
):<button onClick={addCart}>Add to Cart</button>
}
    </div>
    </div>
  );
};

