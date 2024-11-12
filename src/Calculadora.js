// src/Calculadora.js

import React, { useState } from 'react';
import './Calculadora.css'; // Asegúrate de importar el archivo CSS

function Calculadora() {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value); 
  };

  const handleEvaluate = () => {
    try {
      setResult(eval(input)); 
    } catch (e) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
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
        <button onClick={() => handleClick("+")} className="operator">+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")} className="operator">-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")} className="operator">*</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleClear} className="clear">C</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")} className="operator">/</button>

        <button onClick={handleBackspace}>←</button>
        <button onClick={handleEvaluate} className="equals">=</button>
      </div>
    </div>
  );
}

export default Calculadora;
