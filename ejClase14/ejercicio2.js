//Solicita al usuario cinco calificaciones y usa una función flecha para calcular
// el promedio.

const prompt = require('prompt-sync')();

// Solicita cinco calificaciones al usuario
let calificaciones = [];

for (let i = 1; i <= 5; i++) {
  let calificacion = parseFloat(prompt(`Ingresa la calificación #${i}:`));
  calificaciones.push(calificacion);
}

// Función flecha para calcular el promedio
const calcularPromedio = (notas) => {
  let suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
};

// Calcula y muestra el promedio
let promedio = calcularPromedio(calificaciones);
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);
