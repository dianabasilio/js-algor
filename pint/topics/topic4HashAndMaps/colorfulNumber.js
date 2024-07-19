function isColorfulNumber(number) {
  let numStr = number.toString();
  let productMap = new Map();

  for (let i = 0; i < numStr.length; i++) {
    let product = 1;
    for (let j = i; j < numStr.length; j++) {
      console.log("numStr[j]", numStr[j]);
      product *= parseInt(numStr[j]);
      console.log("product", product);
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
