import React from "react";
import {HiShoppingCart} from 'react-icons/hi';

const Navbar = () => {
  return(
  <nav className="nav">
    <header className="nav-header">
      <div className="nav-brand">
        <h4>CartShop</h4>
      </div>
      <div className="nav-cart">
        <HiShoppingCart className="icon nav-icon"/>
        <div className="cart-counter">5</div>
      </div>
    </header>
  </nav>
  );
};

export default Navbar;