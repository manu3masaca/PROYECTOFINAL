//Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario ingrese un número 
//negativo. Luego, imprime la suma de todos los números ingresados. usar estructura while.

const prompt = require('prompt-sync')();

// inicializamos las variables
let suma = 0;
let numero = 0;

// Usamos un bucle while para solicitar números al usuario
while (numero >= 0) {
    numero = parseInt(prompt("Ingrese un número (negativo para salir): "));
    if (numero >= 0) {
        suma += numero;
    }
}

// Imprimimos la suma de los números ingresados
console.log("La suma de los números ingresados es: " + suma);

