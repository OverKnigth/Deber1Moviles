import React from 'react';
import { Cuadrados } from "./components/Cuadrados";
import SumaArreglos from './components/SumaArreglos';
import { ArreglosDiv } from './components/ArreglosDiv';
import Promedio from './components/Promedio';
import { Acumulador } from './components/Acumulador';

// componente - en base a una función
const App = () => {
  
const alumnos = [
  {
    nombre: "Jahir",
    edad: 19,
    calificacion: 10,
  },
  {
    nombre: "Aaron",
    edad: 18,
    calificacion: 8,
  },
  {
    nombre: "Patrick",
    edad: 18,
    calificacion: 9,
  }
];

  return (
    <div className="mt-2">
      <hr />
      <h1 style={{ textAlign: 'center' }}>Deber Nº1</h1>
      <hr/>
      <Cuadrados/>
      <hr />
      <SumaArreglos/>
      <hr />
      <ArreglosDiv/>
      <hr />
      <Promedio alumnos={alumnos}/>
      <hr />
      <Acumulador/>
      <hr />
    </div>
  );
}

export default App;
