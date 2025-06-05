// Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado 
// es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

const prompt = require('prompt-sync')();

// Solicitar al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número: "));

// Analizar si el número es positivo, negativo o cero
if (numero > 0) {
    console.log("El número ingresado es positivo.");
} else if (numero < 0) {console.log("El número ingresado es negativo.");
} else {console.log("El número ingresado es cero.");
}