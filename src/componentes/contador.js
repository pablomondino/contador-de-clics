import React from "react";
import '../hojas-de-estilo/contador.css'

function Contador(props){
/*Dentro del return, retornamos la estructura jsx de nuestro contador*/
return(
    <div className="contador">
   {/*tomamos el numero de clic como un prop, para que se actualice*/}
    {props.numClics}
    
    </div>
)
}

export default Contador;