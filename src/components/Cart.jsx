import React, { useState } from "react";
import { useCart } from "../CartContext";
import "../styles/Cart.css";

export default function Cart({ onClose }) {
  const { cartItems, updateQuantity } = useCart();
  const [orderMessage, setOrderMessage] = useState("");

  const handleOrder = () => {
    setOrderMessage("✅ Order Successful!");
    setTimeout(() => {
      setOrderMessage("");
      onClose();
    }, 2000);
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-header">
        Cart
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="cart-item-info">
                <p>{item.name}</p>
                <small>${item.price}</small>
              </div>
              <div className="cart-item-actions">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
          <button className="order-btn" onClick={handleOrder}>Order Now</button>
          {orderMessage && <div className="success-message">{orderMessage}</div>}
        </>
      )}
    </div>
  );
}
