function naiveSearch(long, short) {
  let count = 0;

  // Iterar sobre cada posible inicio de substring en 'long'
  for (let i = 0; i <= long.length - short.length; i++) {
    let match = true;

    // Verificar si 'short' coincide completamente a partir de la posición 'i' en 'long'
    for (let j = 0; j < short.length; j++) {
      console.log(long[i + j], short[j]);
      if (long[i + j] !== short[j]) {
        console.log("BREAK");
        match = false;
        break; // Si hay una diferencia, salir del bucle interno
      }
    }

    // Si encontramos una coincidencia completa, incrementar el contador
    if (match) {
      console.log("MAATCHH!");
      count++;
    }
  }

  return count;
}

console.log(naiveSearch("lorie loled lol", "lol")); // Output: 1
