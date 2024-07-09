import Navbar from "./components/Navigate";
import { Navigate, Route, Routes } from "react-router-dom";
import Personajes from "./views/Personajes";
import Home from "./views/Home";
import Login from "./views/Login";
import Admin from "./views/Admin";
import { useContext } from "react";
import { UserContext } from "./context/userContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personaje/:id" element={<Personajes />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
