import React from "react";
import BookCard from "../components/BookCard";
import { useBooks } from "../context/BookContext";

function Home() {
  const { books } = useBooks();

  return (
    <div>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Home;
