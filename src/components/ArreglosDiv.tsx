//3. Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5.
// const arreglo = [5,10,15,20,25,30,35,40,45,50]
export const ArreglosDiv = () => {
  const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const resultado = arreglo.map((valor) => valor / 5);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Division de Arreglos para 5</h2>
      <h3>Arreglo ingresado: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]</h3>
      <h3>Resultado: {resultado.join(', ')}</h3>
    </div>
  );
};
