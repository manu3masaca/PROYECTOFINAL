//Escribe un programa en JavaScript para contar cuántas veces el usuario
// menciona sus flores favoritas. Realiza las siguientes acciones:
// 1. Inicializa un array vacío para almacenar las flores favoritas.
// 2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
// agrega cada una al array manualmente (sin usar métodos como push).
// 3. Pregunta al usuario por una flor específica y verifica si está entre sus
// favoritas.
// 4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto
// debe hacerse manualmente).

const prompt = require('prompt-sync')();

// Paso 1: Inicializa un array vacío con espacio para 3 flores
let floresFavoritas = new Array(3);

// Paso 2: Preguntar al usuario sus tres flores favoritas
floresFavoritas[0] = prompt("Ingresa tu primera flor favorita:");
floresFavoritas[1] = prompt("Ingresa tu segunda flor favorita:");
floresFavoritas[2] = prompt("Ingresa tu tercera flor favorita:");

// Paso 3: Pregunta al usuario por una flor específica
let florBuscada = prompt("¿Qué flor quieres buscar?");

// Paso 4: Verificar manualmente cuántas veces aparece la flor buscada
let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
  // Compara ignorando mayúsculas y espacios
  if (floresFavoritas[i].toLowerCase().trim() === florBuscada.toLowerCase().trim()) {
    contador++;
  }
}

// Mostrar el resultado en consola
if (contador > 0) {
  console.log(`La flor "${florBuscada}" fue mencionada ${contador} vez/veces entre tus favoritas.`);
} else {
  console.log(`La flor "${florBuscada}" no está entre tus favoritas.`);
}