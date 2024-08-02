import React from "react";
import { useNavigate } from "react-router-dom";
import { useBooks } from "../context/BookContext";

import { Link } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();
  const { addToCart } = useBooks();

  const irAlLibro = () => navigate(`/book/${book.id}`);

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
        <img src={book.image} alt={book.title} />
      </Link>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>${book.price}</p>

      <div className="button-container">
        <button className="button" onClick={irAlLibro}>Ver Detalles</button>
        <button className="button" onClick={() => addToCart(book)}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default BookCard;
