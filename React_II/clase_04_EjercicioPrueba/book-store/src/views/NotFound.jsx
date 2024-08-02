import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="header">404 - Page Not Found</h2>

      <button className="button" onClick={() => navigate("/")}>Ir a Home</button>
    </div>
  );
}

export default NotFound;
