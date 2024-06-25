import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Register from "./views/Register";

import Navigation from "./components/Navigation";

function App() {
  return (
    <div style={{ backgroundColor: "#3C3C3B" }}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
