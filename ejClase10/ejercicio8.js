//  Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. La fórmula de conversión
// es: let fahrenheit = celsius * 9 / 5 + 32; Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese la temperatura celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Convertir la temperatura a Fahrenheit
let fahrenheit = celsius * 9 / 5 + 32;

// Mostrar el resultado en la consola
console.log("la temperatura en grados Fahrenheit es: " + fahrenheit);
