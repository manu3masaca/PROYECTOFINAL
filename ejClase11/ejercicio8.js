// Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número 
// entre 1 y 100. Utiliza un ciclo for para resolverlo.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número entero positivo
let numero = parseInt(prompt("Ingrese un número entero positivo: "));

// mostrar los múltiplos del número ingresado entre 1 y 100

console.log("Los múltiplos de " + numero + " entre 1 y 100 son:");

for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
        console.log(i);
    }
}