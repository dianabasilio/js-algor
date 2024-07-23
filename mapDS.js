//Un Map es una colección de pares clave-valor donde cualquier valor
//(tanto objetos como valores primitivos) pueden ser usados como clave o valor.

let mapa = new Map();

console.log("SET");

mapa.set("nombre", "Juan");
mapa.set(1, "uno");
console.log(mapa); // Map(2) { 'nombre' => 'Juan', 1 => 'uno' }

console.log("GET");
console.log(mapa.get("nombre")); // 'Juan'
console.log(mapa.get(1)); // 'uno'
//Cuando no lo encuentra
console.log(mapa.get("direccion")); // undefined

console.log("HAS");

console.log(mapa.has("nombre")); // true
console.log(mapa.has(2)); // false

console.log("DELETE");
mapa.delete(1);
console.log(mapa); // Map(1) { 'nombre' => 'Juan' }

console.log("CLEAR");
mapa.clear();
console.log(mapa); // Map(0) {}

mapa.set("a", 1);
mapa.set("b", 2);
console.log(mapa.size); // 2

mapa.set("a", 1);
mapa.set("b", 2);
mapa.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Salida:
// a: 1
// b: 2

let mapa2 = new Map();
mapa2.set("a", 1);
mapa2.set("b", 2);

console.log("KEYS");
console.log(mapa2.keys());
// keys()
for (let key of mapa2.keys()) {
  console.log(key);
}
// Salida: a, b

console.log("VALUES");

console.log(mapa2.values());
// values()
for (let value of mapa2.values()) {
  console.log(value);
}
// Salida: 1, 2

console.log("ENTRIES");
console.log(mapa2.entries());
// entries()
console.log("ENTRIES");
for (let [key, value] of mapa2.entries()) {
  console.log(`${key}: ${value}`);
}
// Salida:
// a: 1
// b: 2
