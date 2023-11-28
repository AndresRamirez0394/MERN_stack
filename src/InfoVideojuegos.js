import React from 'react';
import PropTypes from 'prop-types';

function InfoVideojuegos({ juego }) {
  console.log(juego);
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={juego.imagen} alt={juego.nombre} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{juego.nombre}</h5>
            <p className="card-text">Rating: {juego.rating}</p>
            <p className="card-text">Metacritic: {juego.metacritic}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

InfoVideojuegos.propTypes = {
  juego: PropTypes.shape({
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    rating: PropTypes.number,
    metacritic: PropTypes.number,
  }).isRequired,
};

export default InfoVideojuegos;