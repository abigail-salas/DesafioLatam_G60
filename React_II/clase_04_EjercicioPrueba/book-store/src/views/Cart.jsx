import React from "react";
import CartItem from "../components/CartItem";
import { useBooks } from "../context/BookContext";

function Cart() {
  const { cart } = useBooks();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container cart">
      <h1 className="header">Your Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
}

export default Cart;
