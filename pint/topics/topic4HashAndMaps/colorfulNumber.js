//convertir el number en string para poder iterar sobre ella
//
function isColorfulNumber(number) {
  let numStr = number.toString();
  let productMap = new Map();

  for (let i = 0; i < numStr.length; i++) {
    let product = 1;
    //para cada number se hace multiplicacion
    for (let j = i; j < numStr.length; j++) {
      console.log("numStr[j]", numStr[j]);
      //Se multiplica por 1 siempre el numero primero y luego con los que le siguen
      product *= parseInt(numStr[j]);
      console.log("product", product);
      //si el producto está en product map quiere decir que no es colorful number
      //porque colorful numbers son los que en todas sus
      //combinaciones no se repite el producto
      if (productMap.has(product)) {
        return false;
      }
      productMap.set(product, true);
      console.log("productMap", productMap);
    }
  }
  return true;
}

// Ejemplo de uso
let number1 = 3245;
console.log(isColorfulNumber(number1)); // Output: true

let number2 = 326;
console.log(isColorfulNumber(number2)); // Output: false
