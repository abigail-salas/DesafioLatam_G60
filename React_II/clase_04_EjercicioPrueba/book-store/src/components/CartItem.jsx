import React from "react";
import { useBooks } from "../context/BookContext";

function CartItem({ item }) {
  const { removeFromCart, incrementQuantity, decrementQuantity } = useBooks();

  return (
    <div className="cart-item">
      <img src={item.image} alt="" />

      <h4>{item.title}</h4>
      <p>
        ${item.price} X{" "}
        {item.quantity > 1
          ? `${item.quantity} unidades`
          : `${item.quantity} unidad`}
      </p>

      <div className="button-group">
        <button className="button button-small" onClick={() => decrementQuantity(item.id)}>-</button>
        <button className="button button-small" onClick={() => incrementQuantity(item.id)}>+</button>

        <button className="button " onClick={() => removeFromCart(item.id)}>remove</button>
      </div>
    </div>
  );
}

export default CartItem;
