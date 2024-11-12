// src/App.js

import React, { useState } from 'react';
import Calculadora from './Calculadora'; // Importar la calculadora
import Condicional from './Condicional'; // Importar la condicional
import './App.css';

function App() {
  const [mostrarCalculadora, setMostrarCalculadora] = useState(true); // Estado para controlar qué componente mostrar

  const toggleMostrarCalculadora = () => {
    setMostrarCalculadora(!mostrarCalculadora); // Cambiar el estado para alternar entre los dos componentes
  };

  return (
    <div className="App">
      <h1>Aplicaciones React</h1>
      <button onClick={toggleMostrarCalculadora}>
        {mostrarCalculadora ? 'Ver Condicional' : 'Ver Calculadora'}
      </button>
      
      {mostrarCalculadora ? <Calculadora /> : <Condicional />}
    </div>
  );
}

export default App;
