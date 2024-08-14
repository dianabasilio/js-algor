//Se usa en local state, más que nada isolated functionality, solo para un componente
import React, { useReducer } from "react";

// Definir el estado inicial
const initialState = { count: 0 };

// Definir la función reductora (reducer)
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknown action type");
  }
}

// Definir el componente
function Counter() {
  // Usar useReducer para manejar el estado del contador
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default Counter;
