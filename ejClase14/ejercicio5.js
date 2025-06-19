//Solicita al usuario ingresar la marca de un auto y utiliza una función flecha
// para verificar y mostrar si el auto es de origen nacional o importado.
// Considera que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de
// origen nacional.
// ✔ Solicita al usuario que ingrese la marca de un auto.
// ✔ Utiliza una función flecha para determinar si la marca ingresada
// corresponde a un auto de origen nacional o importado.
// ✔ Muestra un mensaje indicando si el auto es de origen nacional o
// importado, basado en la marca ingresada por el usuario.

const prompt = require('prompt-sync')();

// Solicita la marca del auto al usuario
let marca = prompt("Ingresa la marca del auto:");

// Función flecha para verificar el origen del auto
const verificarOrigen = (marca) => {
  // Convertimos a minúsculas para que no haya problemas con las mayúsculas/minúsculas
  let marcaNormalizada = marca.trim().toLowerCase();

  // Marcas nacionales
  const marcasNacionales = ["chevrolet", "ford", "fiat"];

  // Verificamos si la marca está en la lista
  return marcasNacionales.includes(marcaNormalizada)
    ? "El auto es de origen nacional."
    : "El auto es de origen importado.";
};

// Mostrar el resultado
let resultado = verificarOrigen(marca);
console.log(resultado);