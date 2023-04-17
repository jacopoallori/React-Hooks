import React from "react";
import product from "../product";
import CartItem from "./CartItem";
import {MdRemoveShoppingCart} from "react-icons/md";

const Cart = () => {
  return (
    <section className="section-center" style={{marginTop: "2rem"}}>
      <div className="cart-info">
        <h6>Item</h6>
        <h6 className="prd-name">Nome</h6>
        <h6>Qty</h6>
        <h6>Prezzo</h6>
        <button className="btn icon-btn">
          <MdRemoveShoppingCart className="icon minus-icon"/>
        </button>
      </div>
      <hr/>
      <section className="cart-section">
        {
          product.map(el => {
            return <CartItem key={el._id} {...el}/>
          })
        }
      </section>
    </section>
  );
};

export default Cart;