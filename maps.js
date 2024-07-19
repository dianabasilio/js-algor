// Crear un nuevo Map
let myMap = new Map();

// Agregar elementos al Map
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set(3, "value3"); // La clave puede ser un número
myMap.set(true, "value4"); // La clave puede ser un booleano

// Acceder a los valores usando las claves
console.log(myMap.get("key1")); // Output: value1
console.log(myMap.get(3)); // Output: value3

// Verificar si una clave existe en el Map
console.log(myMap.has("key2")); // Output: true
console.log(myMap.has("key3")); // Output: false

// Obtener el tamaño del Map
console.log(myMap.size); // Output: 4

// Eliminar un elemento del Map usando su clave
myMap.delete("key2");
console.log(myMap.has("key2")); // Output: false

// Iterar sobre los elementos del Map
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// key1: value1
// 3: value3
// true: value4

// Limpiar todos los elementos del Map
myMap.clear();
console.log(myMap.size); // Output: 0
