function iceCreamParlor(m, cost) {
  // Crear un hash map para almacenar los precios y sus índices
  let priceMap = new Map();

  // Iterar sobre la lista de precios
  for (let i = 0; i < cost.length; i++) {
    let price = cost[i];
    let complement = m - price;

    // Verificar si el precio complementario ya está en el hash map
    if (priceMap.has(complement)) {
      // Devolver los índices en formato 1-based
      return [priceMap.get(complement) + 1, i + 1];
    }

    // Agregar el precio actual y su índice al hash map
    priceMap.set(price, i);
    console.log("priceMap", priceMap);
  }

  // Si no se encuentran los dos precios que suman a m, retornar un array vacío (según el problema no debería pasar)
  return [];
}

// Ejemplo de uso:
let m = 4;
let cost = [1, 4, 5, 3, 2];
console.log(iceCreamParlor(m, cost)); // Salida: [1, 4]
