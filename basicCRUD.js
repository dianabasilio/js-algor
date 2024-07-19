// Creamos un array inicial
let usuarios = [
  { id: 1, nombre: "Juan", edad: 30 },
  { id: 2, nombre: "María", edad: 25 },
  { id: 3, nombre: "Pedro", edad: 35 },
];

// Función para crear un nuevo usuario
function crearUsuario(nuevoUsuario) {
  usuarios.push(nuevoUsuario);
}

// Función para leer todos los usuarios
function obtenerUsuarios() {
  return usuarios;
}

// Función para leer un usuario por su id
function obtenerUsuarioPorId(id) {
  return usuarios.find((usuario) => usuario.id === id);
}

// Función para actualizar un usuario por su id
function actualizarUsuario(id, nuevoDatosUsuario) {
  let indice = usuarios.findIndex((usuario) => usuario.id === id);
  if (indice !== -1) {
    usuarios[indice] = { ...usuarios[indice], ...nuevoDatosUsuario };
  }
}

// Función para eliminar un usuario por su id
function eliminarUsuario(id) {
  usuarios = usuarios.filter((usuario) => usuario.id !== id);
}

// Ejemplo de uso:
console.log("Usuarios iniciales:", obtenerUsuarios());

// Creamos un nuevo usuario
crearUsuario({ id: 4, nombre: "Ana", edad: 28 });
console.log("Usuarios después de crear a Ana:", obtenerUsuarios());

// Actualizamos el usuario con id 2
actualizarUsuario(2, { nombre: "María Fernanda", edad: 26 });
console.log(
  "Usuarios después de actualizar a María Fernanda:",
  obtenerUsuarios()
);

// Eliminamos el usuario con id 3
eliminarUsuario(3);
console.log("Usuarios después de eliminar a Pedro:", obtenerUsuarios());

// Obtenemos el usuario con id 1
console.log("Usuario con id 1:", obtenerUsuarioPorId(1));
