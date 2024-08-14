// src/Contador.js
import React, { useState } from "react";

const Contador = () => {
  // Declara una variable de estado para el contador, inicializada en 0
  const [contador, setContador] = useState(0);

  // Funciones para manejar los cambios del contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  const restablecer = () => {
    setContador(0);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={restablecer}>Restablecer</button>
    </div>
  );
};

export default Contador;
