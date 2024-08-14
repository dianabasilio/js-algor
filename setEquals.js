function set_equals(arr1, arr2) {
  // Si ambos son iguales referencias, son iguales
  if (arr1 === arr2) return true;

  // Si uno de los dos no es un array o tienen diferente longitud, no son iguales
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Compara los arrays elemento a elemento
  for (let i = 0; i < arr1.length; i++) {
    console.log("NORMAL");
    console.log("arr1[i]", arr1[i]);
    console.log("arr2[i]", arr2[i]);
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      console.log("array");
      console.log("arr1[i]", arr1[i]);
      console.log("arr2[i]", arr2[i]);
      // Si ambos elementos son arrays, compara recursivamente
      if (set_equals(arr1[i], arr2[i]) === false) return false;
    } else if (arr1[i] !== arr2[i]) {
      //Aquí aplica cuando son diferentes tipos
      //Y también aplica cuando simplemente son diferentes
      console.log("no son arrays");
      console.log("arr1[i]", arr1[i]);
      console.log("arr2[i]", arr2[i]);
      // Si los elementos son diferentes y no son arrays, no son iguales
      return false;
    }
  }

  // Si todas las comparaciones pasan, los arrays son iguales
  return true;
}

// Ejemplos de uso
console.log(set_equals(["a", ["b", ["c"]]], ["a", ["b", ["c"]]])); // True
// Ejemplos de uso
console.log(set_equals(["a", "b"], ["a", ["b"]])); // False
console.log(set_equals(["a", ["b"]], ["a", ["b"]])); // True
console.log(set_equals(["a", ["b", ["c"]]], ["a", ["b", ["c"]]])); // True
console.log(set_equals(["a", ["b", ["c"]]], ["a", ["b"]])); // False
