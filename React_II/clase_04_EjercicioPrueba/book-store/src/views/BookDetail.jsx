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
        <>
          <img src={book.image} alt="" />
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>${book.price}</p>

          <button onClick={() => addToCart(book)}>Agregar al Carrito</button>
        </>
      ) : (
        <p>Libro no encontrado</p>
      )}
    </div>
  );
}

export default BookDetail;
