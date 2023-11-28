import React, { useState } from 'react';
import { AgregaGenero } from './componentes/agregaGenero';
import { ResultadoVideojuegos } from './componentes/ResultadoVideojuegos';
import Navbar from './componentes/Navbar';

export const VideojuegosApp = () => {
 const [generos, setGeneros] = useState(['action']);

 return (
<>
 <Navbar />
 <div className="jumbotron jumbotron-fluid">
<div className="container">
 <h1 className="display-4">Gamebook</h1>
 <p className="lead">¡Bienvenido a la página donde podrás consultar información de
videojuegos!</p>
 <AgregaGenero setGeneros = {setGeneros}/>
 <ol className="list-group list-group-numbered">
{
 generos.map( genero => {
return <ResultadoVideojuegos
        key={genero}
        genero={genero}
/>
 })
}
 </ol>
</div>
 </div>
</>
 )
}