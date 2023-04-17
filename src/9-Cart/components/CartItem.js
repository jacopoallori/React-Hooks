import React from "react";
import {MdDelete} from 'react-icons/md';
import {BiPlus, BiMinus} from 'react-icons/bi';

const CartItem = ({_id, name, image, price, countInStock}) => {
  return( 
  <article className="cart-item">
    <div className="img-container">
      <img src={image} alt={name} className="img"/>
    </div>
    <p className="prd-name">{name}</p>
    <div className="qty-selector">
      <button className="btn icon-btn">
        <BiPlus className="icon"/>
      </button>
      <p>1</p>
      <button className="btn icon-btn">
        <BiMinus className="icon"/>
      </button>
    </div>
    <p>{price}€</p>  
    <button className="btn icon-btn">
      <MdDelete className="icon minus-icon"/>
    </button>
  </article>
  );
};

export default CartItem;