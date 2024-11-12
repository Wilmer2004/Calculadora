import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState(""); // Guardamos lo que el usuario escribe
  const [result, setResult] = useState(""); // El resultado de la operación

  // Función para manejar los clics de los botones
  const handleClick = (value) => {
    setInput(input + value); // Agrega el valor al input
  };

  // Función para evaluar la operación
  const handleEvaluate = () => {
    try {
      setResult(eval(input)); // Evaluamos la expresión matemática
    } catch (e) {
      setResult("Error"); // Si hay un error, mostramos 'Error'
    }
  };

  // Función para limpiar la pantalla
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  // Función para manejar la retroceso (backspace)
  const handleBackspace = () => {
    setInput(input.slice(0, -1)); // Elimina el último carácter
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled className="input-display" />
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={handleBackspace}>←</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
}

export default App;
