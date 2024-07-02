import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./views/Admin";
import Home from "./views/Home";

import PostsProvider from "./context/PostsContext";

const App = () => {
  return (
    <PostsProvider>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} a />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </PostsProvider>
  );
};
export default App;
