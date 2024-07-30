import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext();

export const useBooks = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("books.json");
      const data = await res.json();
      setBooks(data);
    };

    fetchBooks();
  }, []);

  const addToCart = (book) => {
    setCart([...cart, { ...book, quantity: 1 }]);

    alert("El libro fue agregado con exito");
  };

  const incrementQuantity = (id) => {
    return setCart(
      cart.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );
  };

  const decrementQuantity = (id) => {
    return setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (id) => setCart(cart.filter((book) => book.id !== id));

  const contextValues = {
    cart,
    books,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  };

  return (
    <BookContext.Provider value={contextValues}>
      {children}
    </BookContext.Provider>
  );
};
