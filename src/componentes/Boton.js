import React from "react";
import '../hojas-de-estilo/boton.css';

function Boton({texto, esBotonDeClic, manejarClic}){  
return(
<button className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
onClick={manejarClic}>
  {texto} 
  </button>
  /*la clase va a estar condicionada por el tipo de boton , asignamos la clase en forma condicionada con el operador ternario*/
)
}
/*la funcion manejar clics que recibe por props se va encargar manejar toda logica */
export default Boton;