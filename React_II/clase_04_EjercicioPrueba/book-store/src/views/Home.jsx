import React from "react";
import BookCard from "../components/BookCard";
import { useBooks } from "../context/BookContext";

function Home() {
  const { books } = useBooks();

  return (
    <div className="container">
      <h1 className="header">Book Store</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
