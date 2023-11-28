import React from "react";
import './stylesLista.css';
import drg from './img/Deep-Rock-Galactic.jpg';
import lol from './img/LoL2.jpg';
import zelda from './img/zelda.jpg';

const ListaVideojuegosApp = ({}) =>{
const titulo = 'Lista de Videojuegos';

return (
<>
<h1>{titulo}</h1>
<ul>
    <li>
        <p>
            <a class='nombre'>Nombre: Deep Rock Galactic<br></br></a>
            <a class='dev'>Desarrollador: Ghost Ship Games<br></br></a>
            <a class='fecha'>Fecha Lanzamiento: 13 Mayo 2020<br></br></a>
            <img src={drg}></img>
        </p>
    </li>
    <li>
        <p>
            <a class='nombre'>Nombre: League of Legends<br></br></a>
            <a class='dev'>Desarrollador: Riot Games<br></br></a>
            <a class='fecha'>Fecha Lanzamiento: 27 Octubre 2009<br></br></a>
            <img src={lol}></img>
        </p>
    </li>
    <li>
        <p>
            <a class='nombre'>Nombre: The Legend of Zelda: Tears of the Kingdom<br></br></a>
            <a class='dev'>Desarrollador: Nintendo<br></br></a>
            <a class='fecha'>Fecha Lanzamiento: 12 Mayo 2023<br></br></a>
            <img src={zelda}></img>
        </p>
    </li>
</ul>
</>

);
}

export default ListaVideojuegosApp;