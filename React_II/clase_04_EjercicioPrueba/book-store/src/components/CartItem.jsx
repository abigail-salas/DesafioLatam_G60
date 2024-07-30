import React from "react";
import { useBooks } from "../context/BookContext";

function CartItem({ item }) {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useBooks();

  return (
    <div>
      <img src={item.image} alt="" />

      <div>
        <h4>{item.title}</h4>
        <p>
          ${item.price} X {item.quantity}
        </p>
      </div>

      <button onClick={() => incrementQuantity(item.quantity)}>+</button>
      <button onClick={() => decrementQuantity(item.quantity)}>-</button>

      <button onClick={() => removeFromCart(item.id)}>remove</button>
    </div>
  );
}

export default CartItem;
