function areBracketsBalanced(s) {
  // Stack to keep track of opening brackets
  let stack = [];

  // Map to keep track of matching pairs
  let matchingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Convert the string to an array and iterate through each character
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // Si el caracter es un paréntesis de apertura, agrégalo al stack
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // Si el caracter es un paréntesis de cierre
    else if (char === ")" || char === "}" || char === "]") {
      // Verifica si el stack está vacío o si el elemento en la cima del stack no coincide con el paréntesis de cierre
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== matchingBrackets[char]
      ) {
        return "NO"; // Retorna "NO" inmediatamente al encontrar un desequilibrio
      } else {
        // Si coincide, saca el elemento del stack
        stack.pop();
      }
    }
  }

  // Si el stack está vacío al final, los paréntesis están balanceados
  return stack.length === 0 ? "YES" : "NO";
}

// Ejemplo de prueba:
console.log(areBracketsBalanced("{[()]}")); // Output: "YES"
console.log(areBracketsBalanced("{[(])}")); // Output: "NO"
console.log(areBracketsBalanced("{{[[(())]]}}")); // Output: "YES"
console.log(areBracketsBalanced("")); // Output: "YES"
console.log(areBracketsBalanced("()")); // Output: "YES"
console.log(areBracketsBalanced(")(")); // Output: "NO"
