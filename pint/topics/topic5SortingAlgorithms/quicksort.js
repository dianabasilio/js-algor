function processData(input) {
  function quickSort(arr) {
    // Si el array tiene 0 o 1 elementos, ya esta ordenado
    if (arr.length <= 1) {
      return arr;
    }

    // Seleccionamos el pivote
    let pivot = arr[0];
    let left = [];
    let right = [];

    // Dividimos el array en dos subarrays
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    console.log("left", left);
    console.log("right", right);

    // Conquistamos: ordenamos recursivamente los subarrays
    left = quickSort(left);
    right = quickSort(right);

    // Combinamos los subarrays ordenados y el pivote
    const sorted = [...left, pivot, ...right];

    console.log("...left", ...left);
    console.log("pivot", pivot);
    console.log("...right", ...right);

    // Imprimimos el estado del array en cada paso de la recursion
    //Este console log no se quita
    console.log(sorted.join(" "));

    return sorted;
  }

  // Procesamos la entrada
  //input.split("\n") divide la cadena de entrada en líneas.
  // input.split("\n")[1] toma la segunda línea (índice 1) de la entrada.
  // .split(" ") divide esta linea en elementos utilizando los espacios como separadores.
  // .map(Number) convierte cada elemento de la lista de cadenas en un número.

  const arr = input.split("\n")[1].split(" ").map(Number);
  quickSort(arr);
}

// Ejemplo de entrada
const input = `5
3 1 4 1 5`;
processData(input);
