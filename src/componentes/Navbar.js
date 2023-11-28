import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/videojuegos">Consulta de Videojuegos</Link>
        </li>
        <li>
          <Link to="/">Salir</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;