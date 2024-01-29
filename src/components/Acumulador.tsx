//6. Empleado el hook useState crear un acumulador de 5. 
//Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)

import { useState } from "react";

export const Acumulador = () => {
    const[valor, setValor]=useState(0);

    const acum=(num:number)=>{
        setValor(valor+num)
    }

    //const contador2=(num:number)=>{
    //    setValor(valor-num)
    //}

  return (
    <div style={{ textAlign: "center" }}>
        <h3>Acumulador: <small>{valor}</small></h3>
        <br />
        <button className="btn btn-success"
        onClick={()=>acum(5)}>+5</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger"
        onClick={()=>acum(-5)}>-5</button>
    </div>
  )
}