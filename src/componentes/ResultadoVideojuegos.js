import React, { useEffect } from 'react';
import { useFetch } from './useFetch'; 
import InfoVideojuegos from '../InfoVideojuegos';

export const ResultadoVideojuegos = ({ genero }) => {
  const apiUrl = 'https://api.rawg.io/api/games?key=f9976f882ff641bda3d176d9ec2fe26e&genres=' + encodeURI(genero)

  const { data: infoJuegos, isLoading, error } = useFetch(apiUrl);

  useEffect(() => {
    if (!isLoading && !error) {
      console.log(infoJuegos);
    }
  }, [isLoading, error, infoJuegos]);

  const juegos = infoJuegos?.results?.map((juego) => ({
    id: juego.id,
    nombre: juego.name,
    imagen: juego.background_image,
    rating: juego.rating,
    metacritic: juego.metacritic,
  }));

  return (
    <>
      <h3 className="card-title">{genero}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="row">
          {juegos?.map((juego) => (
            <div className="col-md-4" key={juego.id}>
              <InfoVideojuegos juego={juego} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

