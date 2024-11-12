// src/Condicional.js

import React, { useState } from 'react';
import './Condicional.css'; // Importa los estilos de Condicional

function Condicional() {
  const [numero, setNumero] = useState('');
  const [mensaje, setMensaje] = useState('');

  const verificarNumero = () => {
    if (numero > 10) {
      setMensaje('El número es mayor que 10');
    } else if (numero < 10) {
      setMensaje('El número es menor que 10');
    } else {
      setMensaje('El número es igual a 10');
    }
  };

  return (
    <div className="App">
      <h1>Condicional en React</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingresa un número"
      />
      <button onClick={verificarNumero}>Verificar</button>

      {mensaje && <h2>{mensaje}</h2>}
    </div>
  );
}

export default Condicional;
