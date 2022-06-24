

import './App.css';
import Boton from './componentes/Boton';

import logo from './imagenes/logo.png'


function App() {
 
  const manejarClic = ()=>{
  console.log("hiciste un click")
 }
 const reiniciarContador = ()=>{
  console.log("reiniciar")
 }
 
  return (
    <div className="App">
      
      <div className='imagen-logo-contenedor'>
        <img  className='imagen-logo'
        src={logo}
        
        alt=''
        />
      </div>
      <div className='contenedor-principal'>
        <Boton
        texto="Clic"
        onClick={true}
        manejarClic={manejarClic}
        />
        <Boton/>
        <Boton
        texto="Reiniciar"
        onClick={false}
        manejarClic={reiniciarContador}
        />
        <Boton/>
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
