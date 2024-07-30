import React from "react";
import CartItem from "../components/CartItem";
import { useBooks } from "../context/BookContext";

function Cart() {
  const { cart } = useBooks();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;
