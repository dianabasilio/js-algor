function fib(n) {
  // Caso base: si n es 0 o 1, retornamos n
  if (n < 2) return n;

  // Llamada recursiva para calcular el término actual sumando los dos términos anteriores
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10)); // Output: 55
