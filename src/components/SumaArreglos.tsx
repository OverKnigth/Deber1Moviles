//2. Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. 

export const SumaArreglos = () => {
  const arreglo = [12, 20, 24, 21];
  let suma = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
 
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Suma de Arreglo</h2>
      <h3>Arreglo ingresado: [{arreglo.join(', ')}]</h3>
      <h3>Suma: {suma}</h3>
    </div>
  );
};


export default SumaArreglos;
