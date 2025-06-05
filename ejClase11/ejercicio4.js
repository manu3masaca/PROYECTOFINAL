// Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo
// indicando qué significa cada caso.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número: "));

// Verificar si el número es par o impar
let resultado = (numero % 2 === 0) ? "El número es par, ya que es divisible por 2." : "El número es impar, no es divisible por 2.";
console.log(resultado);