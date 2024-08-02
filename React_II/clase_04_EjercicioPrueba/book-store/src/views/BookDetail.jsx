import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../context/BookContext";

function BookDetail() {
  const { id } = useParams();
  const { books, addToCart } = useBooks();
  const book = books.find((b) => b.id === parseInt(id));

  return (
    <div>
      {book ? (
        <div className="container book-detail">
          <img src={book.image} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <p>${book.price}</p>
          <p>Genero: {book.genre}</p>
          <button className="button" onClick={() => addToCart(book)}>
            Agregar al Carrito
          </button>
        </div>
      ) : (
        <p>Libro no encontrado</p>
      )}
    </div>
  );
}

export default BookDetail;
