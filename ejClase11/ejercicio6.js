// Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10.
// Usa un ciclo for.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número: "));

// Imprimir la tabla de multiplicar del número ingresado
console.log("la tabla de multiplicar del " + numero + " es:");

for (let i = 1; i <= 10; i++) {
    console.log( numero + " x " + i + " = " + (numero * i));
}