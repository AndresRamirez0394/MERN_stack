import React from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
  return (
    <div>
      <h1>Bienvenid@s!</h1>
      <Link to="/videojuegos">Ingresar a la aplicación</Link>
    </div>
  );
}