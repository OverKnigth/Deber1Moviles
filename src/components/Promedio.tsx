//4. Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones.
//Luego, escribir una función que calcule el promedio de las calificaciones.
interface Alumno {
  nombre: string;
  edad: number;
  calificacion: number;
}

interface PromP {
  alumnos: Alumno[];
}

const Promedio = ({ alumnos }: PromP) => {
  let prom = 0;
  for (let i = 0; i < alumnos.length; i++) {
    prom += alumnos[i].calificacion;
  }
  const prome = prom / alumnos.length;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Datos de Alumnos</h2>
      {alumnos.map((alumno, index) => (
        <li key={index} style={{ fontSize: "25px" }}>
          {`Nombre del alumno: ${alumno.nombre}`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Edad: ${alumno.edad}`}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`Calificación: ${alumno.calificacion}`}
        </li>
      ))}
      <br />
      <h3>Promedio Total de Calificaciones: {prome}</h3>
    </div>
  );
};

export default Promedio;
