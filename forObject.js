let objeto = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

for (let clave in objeto) {
  console.log(`${clave}: ${objeto[clave]}`);
}
// Salida:
// nombre: Juan
// edad: 30
// ciudad: Madrid
