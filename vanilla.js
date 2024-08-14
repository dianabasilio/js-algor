// Selecciona el botón y el título usando getElementById
const boton = document.getElementById("cambiarTituloBtn");
const titulo = document.getElementById("titulo");

// Añade un evento al botón para cambiar el texto del título cuando se hace clic
boton.addEventListener("click", function () {
  titulo.textContent = "Nuevo Título";
});
