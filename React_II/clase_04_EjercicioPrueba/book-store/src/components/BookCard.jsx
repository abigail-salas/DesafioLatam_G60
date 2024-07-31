import React from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";

function BookCard({ book }) {
  const navigate = useNavigate();
  const { addToCart } = useBooks();

  const irAlLibro = () => navigate(`/book/${book.id}`);

  return (
    <div>
      <img src={book.image} alt="" />
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <p>${book.price}</p>

      <button onClick={irAlLibro}>Ver Detalles</button>
      <button onClick={() => addToCart(book)}>Agregar al Carrito</button>
    </div>
  );
}

export default BookCard;
