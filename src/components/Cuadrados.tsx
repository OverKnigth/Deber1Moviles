//1. Crear una función con parámetros que permita calcular el área de un cuadrado.
export const Cuadrados = () => {
  const lado = 10;

  const areaC = (lado: number) => {
    return lado * lado;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 >Área de un Cuadrado</h2>
      <img src="https://cdn-icons-png.flaticon.com/512/7183/7183282.png" alt="Cuadrado" width={150}/>
      <h3>
        El valor del lado ingresado es: {lado}
        <br />
        Área de su cuadrado es: {areaC(lado)}
        </h3>
    </div>
  );
}
