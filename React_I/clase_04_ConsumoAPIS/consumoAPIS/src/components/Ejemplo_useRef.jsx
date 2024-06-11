import React, { useRef } from "react";

function Ejemplo_useRef() {
  const dropdownRef = useRef(null);

  const openDropdown = () => {
    dropdownRef.current.style.display = "block";
  };

  const closeDropdown = () => {
    dropdownRef.current.style.display = "none";
  };

  return (
    <div>
      <button onClick={openDropdown}>Abrir Dropdown</button>
      <button onClick={closeDropdown}>Cerrar Dropdown</button>

      <div ref={dropdownRef} className="dropdown">
        Este es el contenido del dropdown
      </div>
    </div>
  );
}

export default Ejemplo_useRef;
