import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const CartWidget = () => {
    return (
      <div className="cart-widget" >

        
        <i className="bi bi-cart" style={{ fontSize: '5 rem' }}></i>
        <span className=" badge-danger">50</span> {/* Número hardcodeado */}
      </div>
    );
  };
  
export default CartWidget;