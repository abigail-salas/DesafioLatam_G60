import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./views/Home";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import BookDetails from "./views/BookDetail";

function App() {
  return (
    <BookProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BookProvider>
  );
}

export default App;
