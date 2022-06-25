

import './App.css';

import Boton from './componentes/Boton';
import Contador from './componentes/contador';

import logo from './imagenes/logo.png'

import { useState } from 'react';


function App() {
 /*hooks: funciones especiales que permiten usar caracteristicas poderosas react
 con componentes funcionales
 useState --->> permite agregar estado a un componente funcional

 Dentro componente funcional declaro un arreglo
 con 2 elementos, el primero es el valor que queremos usar
 como el estado, ejemplo en nuestra aplicacion tienen estado 
 que le llamamos numclics
 otro elemento en el arreglo es una funcion que nos va a permitir
 actualizarlo
 (es normal usar palabra set para referirse asignar)
 (seguida nombre estado)

 */

 const [numClics, setnumClics]=useState(0);
   
 const manejarClic = ()=>{
 setnumClics(numClics+1);
 }
 const reiniciarContador = ()=>{
setnumClics(0);
 }
 
  return (
    <div className="App">
      
      <div className='imagen-logo-contenedor'>
        <img  className='imagen-logo'
        src={logo}
         alt=''
        />
      </
      div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />

        <Boton
        texto="Clic"
        onClick={true}
        manejarClic={manejarClic}
        />
        
        <Boton
        texto="Reiniciar"
        onClick={false}
        manejarClic={reiniciarContador}
        />
        
      </div>
      
      
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
 
 {/* trabajamos con estado
 asignamos un event listener a un boton
 con esto actualizamos el valor de un componente*/}